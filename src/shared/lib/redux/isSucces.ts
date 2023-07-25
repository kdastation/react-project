type Status = "fulfilled" | "rejected";

export const isSuccess = (status: Status) => status === "fulfilled";
