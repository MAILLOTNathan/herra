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
        <Dropdown.Item className="flex flex-row items-center justify-between">
            <img src="assets/danger_zone.svg" alt="danger zone" className="w-8 h-8" />
            <span className="text-xs font-bold">
              Zone de danger
            </span>
        </Dropdown.Item>
        <Dropdown.Item className="flex flex-row items-center justify-between">
            <img src="assets/message.svg" alt="danger zone" className="w-8 h-8" />
            <span className="text-xs font-bold">
              Message
            </span>
        </Dropdown.Item>
        <Dropdown.Item className="flex flex-row items-center justify-between">
            <img src="assets/signaler.svg" alt="danger zone" className="w-8 h-8" />
            <span className="text-xs font-bold">
              Signaler
            </span>
        </Dropdown.Item>
        <Dropdown.Item className="flex flex-row items-center justify-between">
            <img src="assets/suspicious_person.svg" alt="danger zone" className="w-8 h-8" />
            <span className="text-xs font-bold">
              Personne suspecte
            </span>
        </Dropdown.Item>
      </Dropdown>
    </div>
  );
}
