import { Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import { DatePicker, DateTimePicker } from "@mui/x-date-pickers";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

import dayjs from "dayjs";
const MuiPicker = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedTime, setSelectedTime] = useState<Date | null>(null);
    const [selectedDateTime, setselectedDateTime] = useState<Date | null>(null);
    console.log(selectedDate ? dayjs(selectedDate).format("YYYY-MM-DD") : null);
    console.log(selectedTime ? dayjs(selectedTime).format("hh:mm:ss A") : null);
console.log(
    selectedDateTime
        ? dayjs(selectedDateTime).format("YYYY-MM-DD hh:mm:ss A")
        : null
);

    return (
        <Stack spacing={4} sx={{ width: "250px" }}>
            <DatePicker
                label="Date Picker"
                value={selectedDate}
                onChange={(newValue: Date | null) => {
                    setSelectedDate(newValue);
                }}
            />
            <TimePicker
                label="Date Picker"
                value={selectedTime}
                onChange={(newValue: Date | null) => {
                    setSelectedTime(newValue);
                }}
            />
            <DateTimePicker
                label="Date / Time Picker"
                value={selectedDateTime}
                onChange={(newValue: Date | null) => {
                    setselectedDateTime(newValue);
                }}
            />
        </Stack>
    );
};

export default MuiPicker;
