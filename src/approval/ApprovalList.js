import React, {useEffect} from 'react';
import ApprovalDetail from "./ApprovalDetail";


const ApprovalList = () => {

    const [approvalList, setApprovalList] = React.useState([]);
    const [approvalDetail, setApprovalDetail] = React.useState([]);
    const [isModal, setIsModal] = React.useState(false);


    const [currentPage, setCurrentPage] = React.useState(1);
    const pageItme = 5;
    const indexOfLastItem = currentPage * pageItme;
    const indexOfFirstItem = indexOfLastItem - pageItme;
    const currentItems = approvalList.data?.slice(indexOfFirstItem, indexOfLastItem) || [];
    const totalPages = Math.ceil((approvalList.data?.length || 0) / pageItme);

    const goToPrevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const goToNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    useEffect(() => {

        // fetch("http://localhost:9797/approval/approvalRequestListAjax.do",{
            fetch("http://localhost:9797/approval/myApprovalDataAjax.do",{
            method: "POST",
            credentials: "include",
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setApprovalList(data);
            })
            .catch(err => console.log(err));
    }, []);

    const rowClick = (item) => {
        console.log(item);
        fetch("http://localhost:9797/approval/approvalDetailAjax.do?id="+item.APPROVAL_ID,{
            credentials: "include",
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setApprovalDetail(data);
                setIsModal(true);
            })
    }

    return (
        <div style={{fontSize:"12px"}}>
            <h3>결재할 목록</h3>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>문서번호</th>
                        <th>제목</th>
                        <th>상태</th>
                        <th>신청일</th>
                    </tr>
                </thead>
                <tbody>
                {/*{*/}
                {/*    approvalList.data?.map((item, index) => {*/}
                {/*        return (*/}
                {/*            <tr key={item.APPROVAL_ID} onClick={() => rowClick(item)}>*/}
                {/*                <td>{item.APPROVAL_ID}</td>*/}
                {/*                <td>{item.APPROVAL_TITLE}</td>*/}
                {/*                <td>{item.APPROVAL_STATUS}</td>*/}
                {/*                <td>{item.CREATE_DATE}</td>*/}
                {/*            </tr>*/}
                {/*        )*/}
                {/*    })*/}
                {/*}*/}
                {
                    currentItems.map((item) => (
                        <tr key={item.APPROVAL_ID} onClick={() => rowClick(item)}>
                            <td>{item.APPROVAL_ID}</td>
                            <td>{item.APPROVAL_TITLE}</td>
                            <td>{item.APPROVAL_STATUS}</td>
                            <td>{item.CREATE_DATE}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
            <div className="d-flex justify-content-between align-items-center mt-3">
                <button className="btn btn-secondary" onClick={goToPrevPage} disabled={currentPage === 1}>
                    이전
                </button>
                <span>Page {currentPage} of {totalPages}</span>
                <button className="btn btn-secondary" onClick={goToNextPage} disabled={currentPage === totalPages}>
                    다음
                </button>
            </div>
            <ApprovalDetail show={isModal} onClose={() => setIsModal(false)} approval={approvalDetail} />
        </div>
    );
};

export default ApprovalList;