import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Ideas from "./projectsIdea";
import Account, { CVUpload, Form } from "./account";
import './index.css'; // ייבוא קובץ ה-CSS

export default function NavBar() {
    return (
        <div class="navbar flex  align-items-center box-shadow sticky">
            <header>
                <nav>
                    <Link to="/ideas">Ideas</Link>
                    <Link to="/account">Me</Link>
                </nav>
            </header>
            <div className="main-content">
                <Routes>
                    <Route path="/ideas" element={<Ideas />} />
                    <Route path="/account" element={<Account />} />
                    <Route path="/cv-upload" element={<CVUpload />} />
                    <Route path="/form" element={<Form />} />
                </Routes>
            </div>
        </div>
    );
}
