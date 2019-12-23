import { shallowMount } from '@vue/test-utils';
import PriceCurrencyDisplay from '../../src/components/priceCurrencyDisplay';

const wrapper = shallowMount(PriceCurrencyDisplay);

describe('PriceCurrencyDisplay Component:', () => {
  describe('Props: locale', () => {
    it('should use default props when no locale is provided', () => {
      expect(wrapper.props('locale')).toBe('de');
    });
    it('should use the props feeded to the component', () => {
      wrapper.setProps({ locale: 'it' });
      expect(wrapper.vm.locale).toBe('it');
    });
    it('should be type String', () => {
      wrapper.setProps({ locale: 'it' });
      expect(typeof wrapper.vm.locale).toBe('string');
    });
    it('should not be of any other type apart from String', () => {
      expect(typeof wrapper.vm.locale).not.toBe('Number');
    });
  });
  describe('Props: currency', () => {
    it('should use default props when no locale is provided', () => {
      expect(wrapper.props('currency')).toBe('EUR');
    });
    it('should use the props feeded to the component', () => {
      wrapper.setProps({ currency: 'CHF' });
      expect(wrapper.vm.currency).toBe('CHF');
    });
    it('should be type String', () => {
      wrapper.setProps({ currency: 'EUR' });
      expect(typeof wrapper.vm.currency).toBe('string');
    });
    it('should not be of any other type apart from String', () => {
      expect(typeof wrapper.vm.currency).not.toBe('Number');
    });
  });
  describe('Props: priceValue', () => {
    it('should use default props when no locale is provided', () => {
      expect(wrapper.props('priceValue')).toBe(0);
    });
    it('should use the props feeded to the component', () => {
      wrapper.setProps({ priceValue: 1299 });
      expect(wrapper.vm.priceValue).toBe(1299);
    });
    it('should be type String', () => {
      wrapper.setProps({ priceValue: 3499 });
      expect(typeof wrapper.vm.priceValue).toBe('number');
    });
    it('should not be of any other type apart from String', () => {
      expect(typeof wrapper.vm.priceValue).not.toBe('String');
    });
  });
  describe('Computed Properties:', () => {
    describe('normalizedValue', () => {
      it('should return type string', () => {
        wrapper.setProps({ locale: 'nl' });
        wrapper.setProps({ currency: 'EUR' });
        expect(wrapper.vm.normalizedValue).toBe('€ 34.99');
      });
      describe('For a given locale de-ch', () => {
        it('should return value according to swiss locale', () => {
          wrapper.setProps({ currency: 'CHF' });
          wrapper.setProps({ locale: 'de-ch' });
          wrapper.setProps({ priceValue: 2999 });
          expect(wrapper.vm.normalizedValue).toBe('CHF 29.99');
        });
      });
    });
  });
});
