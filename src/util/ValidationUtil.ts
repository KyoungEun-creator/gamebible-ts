export const idValueValidation = (value: string | number): boolean => {
  const regex = /^[a-zA-Z0-9]{4,20}$/;
  if (!regex.test(value.toString())) {
    alert("아이디는 4~20글자로 이루어져야 합니다.");
    return false;
  }
  return true;
};

export const pwValueValidation = (value: string | number): boolean => {
  const regex = /^[^\s]{8,20}$/;
  if (!regex.test(value.toString())) {
    alert("비밀번호는 8~20글자로 이루어져야 합니다.");
    return false;
  }
  return true;
};

export const emailValueValidation = (value: string | number): boolean => {
  const regex = /^[^\s@]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!regex.test(value.toString())) {
    alert("올바른 이메일 주소 형식이 아닙니다.");
    return false;
  }
  return true;
};

export const nicknameValueValidation = (value: string | number): boolean => {
  const regex = /^[a-zA-Z0-9가-힣]{2,20}$/;
  if (!regex.test(value.toString())) {
    alert("닉네임은 2~20글자로 이루어져야 합니다.");
    return false;
  }
  return true;
};
