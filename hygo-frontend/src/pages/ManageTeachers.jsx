import React, { useEffect, useState } from "react";
import AdminLayout from "../pages/AdminDashboard";
import ReusableTable from "../components/Admin/ReusableTable";
import ModalForm from "../components/Admin/ModalForm";

const API = "http://localhost:8080/api/teachers";

const TeachersPage = () => {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({
    fullName: "", username: "", password: "", email: "", subject: "", phone: ""
  });

  const load = async () => {
    setLoading(true);
    try {
      const res = await fetch(API);
      const data = await res.json();
      setTeachers(data);
    } catch (e) { console.error(e) }
    setLoading(false);
  };

  useEffect(()=>{ load(); }, []);

  const openCreate = () => { setEditing(null); setForm({fullName:"",username:"",password:"",email:"",subject:"",phone:""}); setModalOpen(true); }
  const openEdit = (row) => { setEditing(row); setForm({...row}); setModalOpen(true); }

  const save = async () => {
    if (editing) {
      await fetch(`${API}/${editing.id}`, {
        method: "PUT",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(form)
      });
    } else {
      await fetch(API, {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(form)
      });
    }
    setModalOpen(false);
    load();
  };

  const del = async (row) => {
    if (!window.confirm("Delete teacher?")) return;
    await fetch(`${API}/${row.id}`, { method: "DELETE" });
    load();
  };

  const columns = [
    { key: "fullName", title: "Full Name" },
    { key: "username", title: "Username" },
    { key: "email", title: "Email" },
    { key: "subject", title: "Grade/Subject" },
    { key: "phone", title: "Phone" }
  ];

  const actions = [
    { label: "Edit", onClick: openEdit },
    { label: "Delete", onClick: del }
  ];

  return (
    <AdminLayout title="Manage Teachers">
      <div style={{display:"flex", justifyContent:"space-between", marginBottom:16}}>
        <div>
          <button onClick={openCreate}>+ Add Teacher</button>
        </div>
      </div>

      {loading ? <div>Loading…</div> :
        <ReusableTable columns={columns} data={teachers} actions={actions} />
      }

      <ModalForm visible={modalOpen} title={editing ? "Edit Teacher" : "Add Teacher"}
                 onClose={()=>setModalOpen(false)} onSubmit={save}>
        <div style={{display:"grid", gap:8}}>
          <input name="fullName" placeholder="Full name" value={form.fullName}
                 onChange={(e)=>setForm({...form, fullName:e.target.value})} required />
          <input name="username" placeholder="Username" value={form.username}
                 onChange={(e)=>setForm({...form, username:e.target.value})} required />
          <input name="password" placeholder="Password" value={form.password}
                 onChange={(e)=>setForm({...form, password:e.target.value})}
                 required={!editing} />
          <input name="email" placeholder="School email" value={form.email}
                 onChange={(e)=>setForm({...form, email:e.target.value})} />
          <input name="subject" placeholder="Grade taught / Subject" value={form.subject}
                 onChange={(e)=>setForm({...form, subject:e.target.value})} />
          <input name="phone" placeholder="Phone" value={form.phone}
                 onChange={(e)=>setForm({...form, phone:e.target.value})} />
        </div>
      </ModalForm>
    </AdminLayout>
  );
};

export default TeachersPage;
