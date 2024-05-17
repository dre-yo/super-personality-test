export interface Question {
    id: string;
    text: string;
    options: { [key: string]: string }; // Object with string keys and string values
}