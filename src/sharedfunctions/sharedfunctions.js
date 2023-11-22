import {strings} from '../strings/strings';

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const authErrorHandler = async (email, password) => {
  if (!email.trim()) {
    return {
      type: strings.email,
      msg: strings.emailrequired,
    };
  } else if (!email.match(emailRegex)) {
    return {
      type: strings.email,
      msg: strings.emailnotvalid,
    };
  } else if (!password) {
    return {
      type: strings.password,
      msg: strings.passwordrequired,
    };
  } else if (password?.length < 6) {
    return {
      type: strings.password,
      msg: strings.passwordlength,
    };
  } else {
    return false;
  }
};

export const basicprofileHandler = async payload => {
  const {name, purpose, skills} = payload;

  if (!name.trim()) {
    return {
      type: strings.name,
      msg: strings.namerequired,
    };
  } else if (!purpose) {
    return {
      type: strings.lookingfor,
      msg: strings.purposerequired,
    };
  } else if (skills?.length < 1) {
    return {
      type: strings.goodat,
      msg: strings.oneskillrequired,
    };
  }
};

export const educationFieldsHandler = async payload => {
  const {institue, degree, startdate, enddate, studyprogress} = payload;
  if (!institue.trim()) {
    return {
      type: strings.institue,
      msg: strings.instituerequired,
    };
  } else if (!degree.trim()) {
    return {
      type: strings.degree,
      msg: strings.degreerequired,
    };
  } else if (!startdate.trim()) {
    return {
      type: strings.startdate,
      msg: strings.startdaterequired,
    };
  } else if (!studyprogress && !enddate.trim()) {
    return {
      type: strings.enddate,
      msg: strings.enddaterequired,
    };
  } else {
    return false;
  }
};

export const experienceFieldsHandler = async payload => {
  const {title, company, startdate, enddate, currentlyworking} = payload;
  if (!title.trim()) {
    return {
      type: strings.title,
      msg: strings.titlerequired,
    };
  } else if (!company.trim()) {
    return {
      type: strings.companyname,
      msg: strings.companynamerequired,
    };
  } else if (!startdate.trim()) {
    return {
      type: strings.startdate,
      msg: strings.startdaterequired,
    };
  } else if (!currentlyworking && !enddate.trim()) {
    return {
      type: strings.enddate,
      msg: strings.enddaterequired,
    };
  } else {
    return false;
  }
};
