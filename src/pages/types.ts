export interface PreparedMarks {
  5: number;
  4: number;
  3: number;
  2: number;
}

export interface Report {
  avg_five: string;
  avg_hundred: string;
  subject_name: string;
  periods: Period[];
}

export interface Period {
  avg_five: string;
  avg_hundred: string;
  end: string;
  end_iso: string;
  marks: Mark[];
  name: string;
  start: string;
  start_iso: string;
}

export interface Mark {
  id: string;
  control_form_id: number;
  control_form_name: string;
  date: string;
  grade_system_type: string;
  is_exam: boolean;
  weight: number;
  values: Value[];
}

export interface Value {
  five: number;
  hundred: number;
  original: string;
}
