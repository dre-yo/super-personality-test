export interface Question {
    id: string;
    text: string;
    image: string;
    options: { [key: string]: string }; // Object with string keys and string values
}