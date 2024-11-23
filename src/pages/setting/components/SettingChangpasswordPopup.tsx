import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, TextField, Button } from "@mui/material";

interface SettingChangePasswordPopupProps {
  open: boolean;
  onClose: () => void;
}

const SettingChangePasswordPopup: React.FC<SettingChangePasswordPopupProps> = ({
  open,
  onClose,
}) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSave = () => {
    // Add logic for password validation and submission
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert("Password changed successfully!");
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>
        <p className="text-lg font-semibold text-gray-600">Change password</p>
      </DialogTitle>
      <DialogContent>
        <div className="flex flex-col gap-4">
          <TextField
            type="password"
            label="Old password"
            placeholder="Please enter old password"
            variant="outlined"
            fullWidth
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
          <TextField
            type="password"
            label="New password"
            placeholder="Please enter a new password"
            variant="outlined"
            fullWidth
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <TextField
            type="password"
            label="Confirm new password"
            placeholder="Please confirm and enter a new password"
            variant="outlined"
            fullWidth
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            className="bg-gray-800 hover:bg-gray-900 text-white"
            onClick={handleSave}
          >
            Save new password
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SettingChangePasswordPopup;
