export interface Question {
    id: number;
    text: string;
    options: { [key: string]: string }; // Object with string keys and string values
}