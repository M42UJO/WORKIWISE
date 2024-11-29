import React from "react";

const AddBody: React.FC = () => {
  const tasks = [
    { taskName: "Task 1", status: "Complete", startDate: "5 days ago", dueDate: "Tomorrow" },
    { taskName: "Task 2", status: "Not Complete", startDate: "5 days ago", dueDate: "Tomorrow" },
  ];

  return (
    <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
      <thead style={{ backgroundColor: "#f5f5f5" }}> {/* เพิ่มสีพื้นหลังเทา */}
        <tr>
          <th style={{ textAlign: "left", padding: "10px", borderBottom: "2px solid #ddd" }}>Task</th>
          <th style={{ textAlign: "center", padding: "10px", borderBottom: "2px solid #ddd" }}>Status</th>
          <th style={{ textAlign: "left", padding: "10px", borderBottom: "2px solid #ddd" }}>Start date</th>
          <th style={{ textAlign: "left", padding: "10px", borderBottom: "2px solid #ddd" }}>Due date</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => (
          <tr key={index}>
            <td style={{ padding: "10px", borderBottom: "1px solid #eee" }}>{task.taskName}</td>
            <td
              style={{
                padding: "10px",
                textAlign: "center",
                borderBottom: "1px solid #eee",
                backgroundColor: task.status === "Complete" ? "#c8e6c9" : "#ffcdd2",
                color: task.status === "Complete" ? "green" : "red",
                fontWeight: "bold",
              }}
            >
              {task.status}
            </td>
            <td style={{ padding: "10px", borderBottom: "1px solid #eee" }}>{task.startDate}</td>
            <td style={{ padding: "10px", borderBottom: "1px solid #eee" }}>{task.dueDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AddBody;