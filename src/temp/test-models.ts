import Subscription from "../models/subscription.model";
import Attendance from "../models/attendance.model";
import Group from "../models/group.model";
import User from "../user/user.model";
import Card from "../card/card.model";


async function testModels() {
  await User.sync();
  await Group.sync();
  await Subscription.sync();
  await Card.sync();
  await Attendance.sync();

  // Create a new user
  let newUser;
  try {
    newUser = await User.create({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@gmail.com'
      // other fields...
    });

  } catch (error) {
    console.log(error);
  }

  // Create a new group
  const newGroup = await Group.create({
    name: 'Group 1',
    days: 'Monday,Tuesday,Wednesday',
    hour: '10:00',
    // other fields...
  });

  try {
    // Create a new attendance record
    const newAttendance = await Attendance.create({
      date: new Date(),
      userId: newUser.id,
      groupId: newGroup.id,
      paid: true,
      paymentType: 'cash',
      // other fields...
    });

  } catch (error) {
    console.log(error);
  }

  // Find a user by ID
  const user = await User.findByPk(1);

  // // Find all groups
  const groups = await Group.findAll();

  // // Find all attendances of a user
  const attendances = await Attendance.findAll({
    where: {
      userId: user.id
    }
  });
}

export default testModels;