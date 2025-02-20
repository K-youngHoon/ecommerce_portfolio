import { useTheme } from "@src/hooks";
import { useCounter } from "@src/hooks/useCounter";
import { Button } from "@src/components";

export default function ButtonPage() {
  const { isDark, toggleTheme } = useTheme();
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div>
      <h1>Next.js + Emotion + SCSS</h1>
      <p>현재 카운트: {count}</p>
      <Button onClick={increment} primary>
        +1 증가
      </Button>
      <Button onClick={decrement}>-1 감소</Button>
      <Button onClick={reset}>초기화</Button>

      <p>현재 테마: {isDark ? "🌙 다크모드" : "☀️ 라이트모드"}</p>
      <Button onClick={toggleTheme} primary>
        테마 변경
      </Button>
    </div>
  );
}
