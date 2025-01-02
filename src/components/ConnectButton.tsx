"use client";

import { serverRedirect } from "@/server-actions/redirect";
import { Button } from "./ui/button";

const ConnectButton = () => {
    return (
        <Button
            variant="secondary"
            size="full"
            onClick={() => {
                serverRedirect("/connect");
            }}
        >
            Connect
        </Button>
    )
}
export default ConnectButton