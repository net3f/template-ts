export interface TemplateData {
    [key: string]: string | number;
}

export interface TemplateManager {
    create(source: string, target: string, data: TemplateData): void;
}
