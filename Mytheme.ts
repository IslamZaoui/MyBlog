import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const MyTheme: CustomThemeConfig = {
	name: 'MyTheme',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': 'FiraCodeRegular',
		'--theme-font-family-heading': 'FiraCodeBold',
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '4px',
		'--theme-rounded-container': '6px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': 'var(--color-primary-500)',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '0 0 0',
		'--on-surface': 'var(--color-primary-500)',
		// =~= Theme Colors  =~=
		// primary | #B5BFE2
		'--color-primary-50': '244 245 251', // #f4f5fb
		'--color-primary-100': '240 242 249', // #f0f2f9
		'--color-primary-200': '237 239 248', // #edeff8
		'--color-primary-300': '225 229 243', // #e1e5f3
		'--color-primary-400': '203 210 235', // #cbd2eb
		'--color-primary-500': '181 191 226', // #B5BFE2
		'--color-primary-600': '163 172 203', // #a3accb
		'--color-primary-700': '136 143 170', // #888faa
		'--color-primary-800': '109 115 136', // #6d7388
		'--color-primary-900': '89 94 111', // #595e6f
		// secondary | #232634
		'--color-secondary-50': '222 222 225', // #dedee1
		'--color-secondary-100': '211 212 214', // #d3d4d6
		'--color-secondary-200': '200 201 204', // #c8c9cc
		'--color-secondary-300': '167 168 174', // #a7a8ae
		'--color-secondary-400': '101 103 113', // #656771
		'--color-secondary-500': '35 38 52', // #232634
		'--color-secondary-600': '32 34 47', // #20222f
		'--color-secondary-700': '26 29 39', // #1a1d27
		'--color-secondary-800': '21 23 31', // #15171f
		'--color-secondary-900': '17 19 25', // #111319
		// tertiary | #CA9EE6
		'--color-tertiary-50': '247 240 251', // #f7f0fb
		'--color-tertiary-100': '244 236 250', // #f4ecfa
		'--color-tertiary-200': '242 231 249', // #f2e7f9
		'--color-tertiary-300': '234 216 245', // #ead8f5
		'--color-tertiary-400': '218 187 238', // #dabbee
		'--color-tertiary-500': '202 158 230', // #CA9EE6
		'--color-tertiary-600': '182 142 207', // #b68ecf
		'--color-tertiary-700': '152 119 173', // #9877ad
		'--color-tertiary-800': '121 95 138', // #795f8a
		'--color-tertiary-900': '99 77 113', // #634d71
		// success | #00ff00
		'--color-success-50': '217 255 217', // #d9ffd9
		'--color-success-100': '204 255 204', // #ccffcc
		'--color-success-200': '191 255 191', // #bfffbf
		'--color-success-300': '153 255 153', // #99ff99
		'--color-success-400': '77 255 77', // #4dff4d
		'--color-success-500': '0 255 0', // #00ff00
		'--color-success-600': '0 230 0', // #00e600
		'--color-success-700': '0 191 0', // #00bf00
		'--color-success-800': '0 153 0', // #009900
		'--color-success-900': '0 125 0', // #007d00
		// warning | #fff700
		'--color-warning-50': '255 254 217', // #fffed9
		'--color-warning-100': '255 253 204', // #fffdcc
		'--color-warning-200': '255 253 191', // #fffdbf
		'--color-warning-300': '255 252 153', // #fffc99
		'--color-warning-400': '255 249 77', // #fff94d
		'--color-warning-500': '255 247 0', // #fff700
		'--color-warning-600': '230 222 0', // #e6de00
		'--color-warning-700': '191 185 0', // #bfb900
		'--color-warning-800': '153 148 0', // #999400
		'--color-warning-900': '125 121 0', // #7d7900
		// error | #FF0000
		'--color-error-50': '255 217 217', // #ffd9d9
		'--color-error-100': '255 204 204', // #ffcccc
		'--color-error-200': '255 191 191', // #ffbfbf
		'--color-error-300': '255 153 153', // #ff9999
		'--color-error-400': '255 77 77', // #ff4d4d
		'--color-error-500': '255 0 0', // #FF0000
		'--color-error-600': '230 0 0', // #e60000
		'--color-error-700': '191 0 0', // #bf0000
		'--color-error-800': '153 0 0', // #990000
		'--color-error-900': '125 0 0', // #7d0000
		// surface | #303446
		'--color-surface-50': '224 225 227', // #e0e1e3
		'--color-surface-100': '214 214 218', // #d6d6da
		'--color-surface-200': '203 204 209', // #cbccd1
		'--color-surface-300': '172 174 181', // #acaeb5
		'--color-surface-400': '110 113 126', // #6e717e
		'--color-surface-500': '48 52 70', // #303446
		'--color-surface-600': '43 47 63', // #2b2f3f
		'--color-surface-700': '36 39 53', // #242735
		'--color-surface-800': '29 31 42', // #1d1f2a
		'--color-surface-900': '24 25 34' // #181922
	}
};
