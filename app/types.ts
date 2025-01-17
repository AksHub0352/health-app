export type RecordCardProps = {
    date: string;
    title: string;
    doctor: string;
    type: 'Imaging' | 'Labs' | 'Outpatient' | 'Genetic Testing' | 'Pathology' | 'Procedure' | 'Hospitalization';
    findings?: string[];
    assessment?: string;
    problemList?: string[];
    interpretation?: string;
    diagnosis?: string;
    chiefComplaint?: string;
    viewReport?: boolean;
  };
  
  export type FilterButtonProps = {
    label: string;
    isSelected?: boolean;
    onPress: () => void;
  };
  