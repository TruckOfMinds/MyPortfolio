import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  // CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useState } from "react";
import type { setUserInputProps, Status, userInputProps } from "@/types";
import { Chevron } from "./icons";

/* In-File Components :
  - StatusList (not exported)
*/

const statuses: Status[] = [
  {
    value: "date",
    label: "Date",
  },
  {
    value: "name",
    label: "Name",
  },
];

export default function ComboBoxResponsive({
  userInput,
  setUserInput,
}: {
  userInput: userInputProps;
  setUserInput: setUserInputProps;
}) {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [selectedStatus, setSelectedStatus] = useState<Status | null>({
    label: "Date",
    value: "date",
  });
  if (isDesktop) {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-[150px] justify-start search-y-sort">
            {selectedStatus ? (
              <div className="flex w-full items-center justify-between">
                {selectedStatus.label}
                <Chevron
                  className={`sort-icon-parent transition-transform ${
                    !open ? "rotate-90" : "rotate-[270deg]"
                  }`}
                />
              </div>
            ) : (
              <>Sort by</>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0" align="start">
          <StatusList
            userInput={userInput}
            setUserInput={setUserInput}
            setOpen={setOpen}
            setSelectedStatus={setSelectedStatus}
          />
        </PopoverContent>
      </Popover>
    );
  }
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline" className="w-[150px] justify-start search-y-sort">
          {selectedStatus ? <>{selectedStatus.label}</> : <>Sort by</>}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mt-4 border-t">
          <StatusList
            userInput={userInput}
            setUserInput={setUserInput}
            setOpen={setOpen}
            setSelectedStatus={setSelectedStatus}
          />
        </div>
      </DrawerContent>
    </Drawer>
  );
}

function StatusList({
  setOpen,
  setSelectedStatus,
  userInput,
  setUserInput,
}: {
  setOpen: (open: boolean) => void;
  setSelectedStatus: (status: Status | null) => void;
  userInput: userInputProps;
  setUserInput: setUserInputProps;
}) {
  return (
    <Command>
      {/* <CommandInput placeholder="Filter status..." /> */}
      <CommandList className="jb-mono">
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup>
          {statuses.map(status => (
            <CommandItem
              key={status.value}
              value={status.value}
              onSelect={value => {
                setSelectedStatus(statuses.find(priority => priority.value === value) || null);
                setUserInput({ ...userInput, sort: status.value });
                setOpen(false);
              }}>
              {status.label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
