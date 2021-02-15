import { Subject } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';

export const usePathName = (name: string): ((value: string | undefined) => string) => {
  return (value: string | undefined): string => {
    const searchParams = new URLSearchParams(window.location.search);

    if (searchParams.get('page')) searchParams.set('page', '1');

    if (!value) {
      searchParams.delete(name);
    } else {
      searchParams.set(name, value);
    }

    return `?${searchParams.toString()}`;
  };
};

const subject$ = new Subject<string>();

export const useDebounce = (delay = 500): Subject<string> => {
  return subject$.pipe(
    debounceTime(delay),
    filter((val) => val.length >= 3),
    // distinctUntilChanged(),
  ) as Subject<string>;
};
