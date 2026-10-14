import React from "react";
import ReactDOM from "react-dom/client";
import { PageHeader } from "./components/PageHeader";
import { SkeletonGrid } from "./components/SkeletonGrid";
import "./styles.css";
ReactDOM.createRoot(document.getElementById("root")!).render(<React.StrictMode><main><nav><strong>CaseBridge</strong><span>Public UI scaffold</span></nav><PageHeader eyebrow="CaseBridge" title="Teams. Companies. Opportunities." description="A small, inspectable interface preview. The application core is maintained privately."/><section className="card"><h2>What is public?</h2><p>This preview includes basic presentation components and a layout shell. It contains no login, MFA, session, administration, database or business-rule implementation.</p><a href="https://github.com/ob1to-0/casebridge-public/blob/main/DISTRIBUTION.md">Distribution information</a></section><h2>Card placeholders</h2><SkeletonGrid count={3}/><footer>Created by ob1to-0. This preview does not connect to a live application.</footer></main></React.StrictMode>);
