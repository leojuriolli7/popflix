import * as S from "./styles";

export function PasswordEye({ passwordVisible, setPasswordVisible }: any) {
  return (
    <S.Container>
      {passwordVisible ? (
        <S.EyeVisible onClick={() => setPasswordVisible(!passwordVisible)} />
      ) : (
        <S.EyeInvisible onClick={() => setPasswordVisible(!passwordVisible)} />
      )}
    </S.Container>
  );
}
