
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const AddContactDialog = () => {
  const [open, setOpen] = useState(false);

  const handleSuccess = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="flex items-center space-x-2">
          <Plus className="h-5 w-5" />
          <span>Add Contact</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add New Contact</DialogTitle>
          <DialogDescription>
            Enter the contact details below to add them to your contact list.
          </DialogDescription>
        </DialogHeader>
        <ContactForm 
          onSuccess={handleSuccess} 
          onCancel={() => setOpen(false)} 
        />
      </DialogContent>
    </Dialog>
  );
};

export default AddContactDialog;
