export interface IssueData {
    name: string;
    description: string;
    tags: string[];
    status: string;
    repository_url: string;
    repository_name: string;
    repository_description?: string;
    license?: string;
    assignee?: string;
    assignees: string[];
}