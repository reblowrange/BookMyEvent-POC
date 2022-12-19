export const LocationList: Array<{ text: string, value: string }> = [
    { value: "all", text: "All Location" },
    { value: "Mumbai", text: "Mumbai" },
    { value: "Pune", text: "Pune" },
    { value: "Nagpur", text: "Nagpur" },
    { value: "Thane", text: "Thane" },
    { value: "Pune", text: "Pune" },
    { value: "Nashik", text: "Nashik" },
    { value: "Aurangabad", text: "Aurangabad" },
    { value: "Amravati", text: "Amravati" },
    { value: "Nanded", text: "Nanded" },
    { value: "Kolhapur", text: "Kolhapur" },
    { value: "Malegaon", text: "Malegaon" },
    { value: "Akola", text: "Akola" },
    { value: "Latur", text: "Latur" },
    { value: "Ahmednagar", text: "Ahmednagar" },
    { value: "Chandrapur", text: "Chandrapur" },
    { value: "Ambarnath", text: "Ambarnath" },
    { value: "Panvel", text: "Panvel" },
];

export interface Category {
    id: number;
    name: string;
    matIcon: string;
}

export interface Event {
    id: number;
    name: string;
    description: string;
    category: string;
    onDate: string;
    location: string;
}