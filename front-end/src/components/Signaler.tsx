import { Dropdown } from "flowbite-react";

import { FaExclamationTriangle } from "react-icons/fa";

export default function Signaler() {
  return (
    <div className="fixed bottom-8 right-8 z-10">
      <Dropdown label={
        <div className="flex flex-row items-center justify-between space-x-2">
            <span className="">
                Signaler
            </span>
            <FaExclamationTriangle />
        </div>
        } placement="top" arrowIcon={false} size="xl" color="purple">
        <Dropdown.Item>
            Dashboard
        </Dropdown.Item>
        <Dropdown.Item>
            Settings
        </Dropdown.Item>
        <Dropdown.Item>
            Earnings
        </Dropdown.Item>
        <Dropdown.Item>
            Sign out
        </Dropdown.Item>
      </Dropdown>
    </div>
  );
}
