import 'colors';

export class Command {
  signature() {
    throw new Error('Method not implemented', 1006);
  }

  description() {
    return '';
  }

  options() {
    return [];
  }

  handle() {
    throw new Error('Method not implemented', 1006);
  }
}

export const Info = content => {
  console.log(content.green);
};

export const Warning = content => {
  console.log(content.red);
};

export const Error = content => {
  console.log(content.red);
  process.exit();
};
