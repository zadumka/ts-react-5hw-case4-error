import css from './SearchBox.module.css';

interface SearchBoxProps {
  value: string;
  onSearch: (searchText: string) => void;
}

export default function SearchBox({ value, onSearch }: SearchBoxProps) {
  return (
    <input
      className={css.input}
      type="text"
      placeholder="Search notes"
      value={value}
      // Помилка: відсутній onChange обробник, що робить поле тільки для читання
    />
  );
}
