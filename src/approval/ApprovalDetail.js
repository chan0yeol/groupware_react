import React from 'react';

const ApprovalDetail = ({show, onClose, approval}) => {
    if(!show || !approval) return null;
    return (
        <div>
            {/*<h3>모달입니다~~</h3>*/}
            {/*<button onClick={onClose}>닫기</button>*/}
            {/*<div className="modal-overlay">*/}
            {/*    <div className="modal-content">*/}
            {/*        <h4>결재 상세</h4>*/}
            {/*        <p><strong>문서번호:</strong> {approval.approval_id}</p>*/}
            {/*        <p><strong>제목:</strong> {approval.approval_title}</p>*/}
            {/*        <p><strong>상태:</strong> {approval.approval_status}</p>*/}
            {/*        <p><strong>신청일:</strong> {approval.create_date}</p>*/}
            {/*        /!* 필요한 항목 더 추가 *!/*/}
            {/*        <button onClick={onClose}>닫기</button>*/}
            {/*    </div>*/}
            {/*</div>*/}


            <div className="modal show d-block" tabIndex="-1">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button className="btn btn-info" >승인</button>
                            <button className="btn btn-success">반려</button>
                            <button type="button" className="btn-close" onClick={onClose}></button>
                        </div>

                        <div className="modal-body row">
                            {/*<div className="col-8">*/}
                            {/*    <table className="table table-bordered">*/}
                            {/*        <tbody>*/}
                            {/*        <tr>*/}
                            {/*            <th>문서번호</th>*/}
                            {/*            <td>{approval.approval_id}</td>*/}
                            {/*            <th>기안일자</th>*/}
                            {/*            <td>{approval.create_date}</td>*/}
                            {/*        </tr>*/}
                            {/*        <tr>*/}
                            {/*            <th>기안자</th>*/}
                            {/*            <td>{approval.name}</td>*/}
                            {/*            <th>부서</th>*/}
                            {/*            <td>{approval.dname}</td>*/}
                            {/*        </tr>*/}
                            {/*        <tr>*/}
                            {/*            <th>참조자</th>*/}
                            {/*            <td><span>참조자선택버튼</span></td>*/}
                            {/*            <th>마감기한</th>*/}
                            {/*            <td>{approval.approval_deadline}</td>*/}
                            {/*        </tr>*/}
                            {/*        <tr>*/}
                            {/*            <th>문서제목</th>*/}
                            {/*            <td colSpan="3">{approval.approval_title}</td>*/}
                            {/*        </tr>*/}
                            {/*        </tbody>*/}
                            {/*    </table>*/}
                            <div className="col-8" style={{textAlign:"left", fontSize:"12px"}}>
                                <div className="mb-2">
                                    <strong>문서번호</strong><br />
                                    <span>{approval.approval_id}</span>
                                </div>
                                <div className="mb-2">
                                    <strong>기안일자</strong><br />
                                    <span>{approval.create_date}</span>
                                </div>
                                <div className="mb-2">
                                    <strong>기안자</strong><br />
                                    <span>{approval.name}</span>
                                </div>
                                <div className="mb-2">
                                    <strong>부서</strong><br />
                                    <span>{approval.dname}</span>
                                </div>
                                <div className="mb-2">
                                    <strong>마감기한</strong><br />
                                    <span>{approval.approval_deadline}</span>
                                </div>
                                <div className="mb-2">
                                    <strong>문서제목</strong><br />
                                    <span>{approval.approval_title}</span>
                                </div>
                            </div>

                            <div id="approvalLine" className="mt-3 col-4">
                                <h5>결재 라인</h5>
                                {approval.approvalLineDtos.map((line, idx) => (
                                    <div className="approval-item text-center" key={idx}>
                                        <div>{line.approver_empno}</div>
                                        {line.signature ? (
                                            <img src={line.signature} width="50" height="50" />
                                        ) : (
                                            <>
                                                {line.status_id === "ST04" ? (
                                                    <img src="https://cdn3.iconfinder.com/data/icons/miscellaneous-80/60/check-512.png" width="50" height="50" />
                                                ) : line.status_id === "ST05" ? (
                                                    <img src="https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Close_Icon_Circle-512.png" width="50" height="50" />
                                                ) : null}
                                            </>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div id="modal-content" className="p-3" dangerouslySetInnerHTML={{ __html: approval.approval_content }} />

                        <div className="text-end p-3">
                            <button type="button" className="btn btn-danger" onClick={onClose}>닫기</button>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default ApprovalDetail;