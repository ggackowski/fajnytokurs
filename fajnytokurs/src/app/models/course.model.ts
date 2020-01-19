export default class Course {
  id: string
  courseType :string
  ects :number
  semester :number
  maxStudents :number
  rating :number
  icon :string
  desc :string
  name :string
  enrolled: Array<string>
  rated: Array<string>
}
