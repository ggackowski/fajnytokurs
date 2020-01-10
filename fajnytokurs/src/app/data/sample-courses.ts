import Course from '../models/course.model'

export default class SampleCourses {
  getSampleCourses(): Array<Course> {
    return [
      {
        id: 1,
        courseType: 'lecture',
        ects: 1,
        semester: 1,
        maxStudents: 100,
        rating: 5,
        icon: 'https://thumbs.dreamstime.com/b/sample-stamp-sample-stamp-sign-icon-editable-vector-illustration-isolated-white-background-123950438.jpg',
        desc: 'lorem ipsum dolor sit amet',
        name: 'Analiza matematyczna 1',
        enrolled: [],
        rated: []
      },
      {
        id: 2,
        courseType: 'lab',
        ects: 2,
        semester: 2,
        maxStudents: 20,
        rating: 2,
        icon: 'https://thumbs.dreamstime.com/b/sample-stamp-sample-stamp-sign-icon-editable-vector-illustration-isolated-white-background-123950438.jpg',
        desc: 'lorem ipsum dolor sit amet',
        name: "Analiza matematyczna 2",
        enrolled: [],
        rated: []
      },
      {
        id: 3,
        courseType: 'lab',
        ects: 3,
        semester: 3,
        maxStudents: 20,
        rating: 1,
        icon: 'https://thumbs.dreamstime.com/b/sample-stamp-sample-stamp-sign-icon-editable-vector-illustration-isolated-white-background-123950438.jpg',
        desc: 'lorem ipsum dolor sit amet',
        name: 'Algebra',
        enrolled: [],
        rated: []
      },
      {
        id: 4,
        courseType: 'lecture',
        ects: 4,
        semester: 4,
        maxStudents: 140,
        rating: 1,
        icon: 'https://thumbs.dreamstime.com/b/sample-stamp-sample-stamp-sign-icon-editable-vector-illustration-isolated-white-background-123950438.jpg',
        desc: 'lorem ipsum dolor sit amet',
        name: 'Matematyka dyskretna',
        enrolled: [],
        rated: []
      },
      {
        id: 5,
        courseType: 'lab',
        ects: 5,
        semester: 5,
        maxStudents: 10,
        rating: 5,
        icon: 'https://thumbs.dreamstime.com/b/sample-stamp-sample-stamp-sign-icon-editable-vector-illustration-isolated-white-background-123950438.jpg',
        desc: 'lorem ipsum dolor sit amet',
        name: 'Logika matematyczna',
        enrolled: [],
        rated: []
      },
      {
        id: 6,
        courseType: 'lecture',
        ects: 6,
        semester: 6,
        maxStudents: 12,
        rating: 4,
        icon: 'https://thumbs.dreamstime.com/b/sample-stamp-sample-stamp-sign-icon-editable-vector-illustration-isolated-white-background-123950438.jpg',
        desc: 'lorem ipsum dolor sit amet',
        name: 'Równania różniczkowe i różnicowe',
        enrolled: [],
        rated: []
      },
      {
        id: 7,
        courseType: 'project',
        ects: 7,
        semester: 7,
        maxStudents: 170,
        rating: 4,
        icon: 'https://thumbs.dreamstime.com/b/sample-stamp-sample-stamp-sign-icon-editable-vector-illustration-isolated-white-background-123950438.jpg',
        desc: 'lorem ipsum dolor sit amet',
        name: 'Statystyka',
        enrolled: [],
        rated: []
      },
      {
        id: 8,
        courseType: 'lecture',
        ects: 8,
        semester: 8,
        maxStudents: 190,
        rating: 3,
        icon: 'https://thumbs.dreamstime.com/b/sample-stamp-sample-stamp-sign-icon-editable-vector-illustration-isolated-white-background-123950438.jpg',
        desc: 'lorem ipsum dolor sit amet',
        name: 'Fizyka 1',
        enrolled: [],
        rated: []
      },
      {
        id: 9,
        courseType: 'disc',
        ects: 6,
        semester: 9,
        maxStudents: 14,
        rating: 2,
        icon: 'https://thumbs.dreamstime.com/b/sample-stamp-sample-stamp-sign-icon-editable-vector-illustration-isolated-white-background-123950438.jpg',
        desc: 'lorem ipsum dolor sit amet',
        name: 'Fizyka 2',
        enrolled: [],
        rated: []
      },
      {
        id: 10,
        courseType: 'lecture',
        ects: 4,
        semester: 3,
        maxStudents: 155,
        rating: 2,
        icon: 'https://thumbs.dreamstime.com/b/sample-stamp-sample-stamp-sign-icon-editable-vector-illustration-isolated-white-background-123950438.jpg',
        desc: 'lorem ipsum dolor sit amet',
        name: 'Podstawy elektroniki',
        enrolled: [],
        rated: []
      },
    ]
  }

}
