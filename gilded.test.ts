import { expect, test } from 'vitest'
import { Item, GildedRose } from './gilded.js'

test('should foo', () => {
  const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
  const items = gildedRose.updateQuality();
  expect(items[0].name).toBe('fixme');
})
