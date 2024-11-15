import { ColumnDef } from "@tanstack/react-table";

export type FoodSafety = {
  id: string;
  pathogen: string;
  illness: string;
  signsSymptoms: string[]; 
  onsetTimeDuration: string;
  causes: string[]; 
  prevention: string[]; 
  comments: string[]; 
};

export const columns: ColumnDef<FoodSafety>[] = [
  {
    accessorKey: "pathogen",
    header: "Pathogen",
  },
  {
    accessorKey: "illness",
    header: "Illness",
  },
  {
    accessorKey: "signsSymptoms",
    header: "Signs & Symptoms",
  },
  {
    accessorKey: "onsetTimeDuration",
    header: "Time Duration",
  },
  {
    accessorKey: "causes",
    header: "Causes",
  },
  {
    accessorKey: "prevention",
    header: "Prevention",
  },
  {
    accessorKey: "comments",
    header: "Comments",
  },
];
