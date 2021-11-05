import {MyOwnField} from '../../MyOwnField/MyOwnField'
export const DefaultInputsForm = (props) => (
  <>
    <MyOwnField
      id="name"
      label="Name"
      name="name"
      type="text"
      as="input"
      value={props.name}
      placeholder="Please enter employee's name"
      pattern="^[A-Z-ZąćęłńóśźżĄĘŁŃÓŚŹŻ][a-z-ZąćęłńóśźżĄĘŁŃÓŚŹŻ]+\s[A-Z][a-z]+$"
      required
    />
     <MyOwnField
      id="age"
      label="Age"
      name="age"
      min='0'
      type="number"
      as="input"
      value={props.age}
      placeholder="Please enter employee's age"
      required
    />
     <MyOwnField
       id="gender"
      as="select"
      name="gender"
      label="Gender"
      required
      >
      <option value="">Select a gender</option>
      <option value='male'>
          male
          </option>
          <option value='female'>
          female
        </option>
    </MyOwnField>
      <MyOwnField
      id="company"
      label="Company"
      name="company"
      type="text"
      as="input"
      value={props.company}
      placeholder="Please enter employee's company"
      required
    />
     
    <MyOwnField
      id="isActive"
      as="select"
      name="isActive"
      label="Is active"
      value={props.isActive}
      required>
      <option value="">Select a active</option>
      <option value={false}>
          false
        </option>
        <option  value={true}>
          true
        </option>
    </MyOwnField>
  </>
);
