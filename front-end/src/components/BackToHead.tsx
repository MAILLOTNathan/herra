import { Button, Dropdown } from "flowbite-react";

import { FaChevronCircleUp } from "react-icons/fa";

export default function BackToHead() {
  return (
    <div className="fixed bottom-8 right-8 z-10">
        <Button
            color="purple"
            size="xl"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="rounded-full"
        >
            <FaChevronCircleUp />
        </Button>
    </div>
  );
}
