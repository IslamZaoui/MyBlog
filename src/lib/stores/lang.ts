import type { Locales } from '$i18n/i18n-types';
import { localStorageStore } from '@skeletonlabs/skeleton';
import type { Writable } from 'svelte/store';

export const Lang: Writable<Locales> = localStorageStore('lang', 'en');