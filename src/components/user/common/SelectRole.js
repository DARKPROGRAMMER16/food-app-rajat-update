import React from "react";
import UserCard from "./UserCard";

const SelectRole = (props) => {
    const onRoleChange = (role) => {
        props.onRoleChange(role);
    };

    return (
        <UserCard title="Continue as a..." className="col-lg-6">
            <div className="row user-role text-center p-3 select-role">
                <div
                    className="col-md-6"
                    onClick={() => onRoleChange("teacher")}
                >
                    <div className="card shadow">
                        <img
                            src="/assets/images/profiles/teacher-min.jpg"
                            className="card-img-top "
                            alt="..."
                        />
                        <div className="card-body">
                            <h5 className="card-title">Teacher</h5>
                        </div>
                    </div>
                </div>
                <div
                    className="col-md-6"
                    onClick={() => onRoleChange("student")}
                >
                    <div className="card shadow">
                        <img
                            src="/assets/images/profiles/student-min.jpg"
                            className="card-img-top"
                            alt="..."
                        />
                        <div className="card-body">
                            <h5 className="card-title">Student</h5>
                        </div>
                    </div>
                </div>
                <div
                    className="col-md-4"
                    onClick={() => onRoleChange("employee")}
                >
                    <div className="card shadow">
                        <img
                            src="/assets/images/profiles/employee-min.jpg"
                            className="card-img-top "
                            alt="..."
                        />
                        <div className="card-body">
                            <h5 className="card-title">Employee</h5>
                        </div>
                    </div>
                </div>
                <div
                    className="col-md-4"
                    onClick={() => onRoleChange("employer")}
                >
                    <div className="card shadow">
                        <img
                            src="/assets/images/profiles/employer-min.jpg"
                            className="card-img-top"
                            alt="..."
                        />
                        <div className="card-body">
                            <h5 className="card-title">Employer</h5>
                        </div>
                    </div>
                </div>
                <div
                    className="col-md-4"
                    onClick={() => onRoleChange("institute")}
                >
                    <div className="card shadow">
                        <img
                            src="/assets/images/profiles/institute-min.jpg"
                            className="card-img-top"
                            alt="..."
                        />
                        <div className="card-body">
                            <h5 className="card-title">Institute</h5>
                        </div>
                    </div>
                </div>
            </div>
        </UserCard>
    );
};
export default SelectRole;
