import { Task, TaskStatus, TaskCategory } from "@/store/store"
import { ColumnDef } from "@tanstack/react-table"

export const columns: ColumnDef<Task>[] = [
    {
        accessorKey: "title",
        header: "Task Name",
    },
    {
        accessorKey: "category",
        header: "Category",
        cell: ({ getValue }) => {
            const category = getValue() as TaskCategory;
            return category;
        }
    },
    {
        accessorKey: "dueDate",
        header: "Due Date",
        cell: ({ getValue }) => {
            const date = getValue() as Date;
            return date.toLocaleDateString();
        }
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ getValue }) => {
            const status = getValue() as TaskStatus;
            return status;
        }
    },
]