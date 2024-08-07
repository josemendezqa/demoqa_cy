import { BaseComponent } from './base-component'

export class LabelComponent extends BaseComponent {
	constructor(locator) {
		super(locator)
		this.locator = locator
	}
}
