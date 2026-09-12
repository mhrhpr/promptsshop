import { ROLE_CATALOG } from './ROLE_CATALOG';
import { DEPARTMENT_ACTIONS } from './DEPARTMENT_ACTIONS';
import { renderMasterPrompt } from '../src/content/prompt-engine';

const DEPT_PREFIX: Record<string,string> = {
  "Executive Leadership": "EXE",
  "Finance & Accounting": "FIN",
  "People / HR": "HR",
  "Sales & Business Development": "SALES",
  "Marketing & Communications": "MKT",
  "Operations": "OPS",
  "Supply Chain & Procurement": "SC",
  "Customer Success & Service": "CS",
  "IT & Infrastructure": "IT",
  "Data & Analytics": "DATA",
  "Product Management": "PROD",
  "Engineering & Software": "ENG",
  "Quality / Testing": "QA",
  "Legal / Compliance / Risk": "LEG",
  "Strategy / PMO / Business Excellence": "PMO",
  "R&D / Innovation": "RND",
  "Security": "SEC",
  "Administration / Facilities": "ADMIN",
  "Design / UX / Creative": "DESIGN",
};

export type MaterializedPackage = {
  packageCode:string; packageName:string; department:string; departmentCode:string;
  roleCode:string; roleName:string; prompts:Array<{
    promptCode:string; title:string; task:string; masterPrompt:string; version:string;
  }>;
};

export function materializeRolePackages(): MaterializedPackage[] {
  return ROLE_CATALOG.map((role) => {
    const departmentCode = DEPT_PREFIX[role.department];
    if (!departmentCode) throw new Error(`Unknown department: ${role.department}`);
    const packageCode = `PS-${departmentCode}-${role.roleCode}`;
    const actions = DEPARTMENT_ACTIONS[role.department] as readonly string[];
    const roleMission = `You are the professional AI copilot for the ${role.roleName} role in the ${role.department} function. Optimize for accurate, practical work output that can be used immediately.`;
    return {
      packageCode,
      packageName: `AI Workflow Pack — ${role.roleName}`,
      department: role.department,
      departmentCode,
      roleCode: role.roleCode,
      roleName: role.roleName,
      prompts: actions.map((task, index) => ({
        promptCode: `${packageCode}-P${String(index + 1).padStart(2,'0')}`,
        title: `${task} — ${role.roleName}`,
        task,
        masterPrompt: renderMasterPrompt(role.roleName, roleMission, task),
        version: '1.0.0',
      })),
    };
  });
}
