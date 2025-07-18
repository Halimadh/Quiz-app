interface Props {
  children: string;
  color: string;
  onclick: () => void;
}
export function Button({ children, color, onclick }: Props) {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onclick}>
      {children}
    </button>
  );
}
