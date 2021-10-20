import {
  mapSectionContent,
  mapSections,
  mapSectionTwoColumns,
} from './map-sections';

describe('map-sections', () => {
  it('should render predefined section if no data', () => {
    const data = mapSections();
    expect(data).toEqual([]);
  });
});

describe('map-sections', () => {
  it('should map section two columns', () => {
    const data = mapSectionTwoColumns();
    expect(data.background).toBe(false);
    expect(data.component).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.srcImg).toBe('');
    expect(data.text).toBe('');
    expect(data.title).toBe('');
  });

  it('should map section two columns', () => {
    const data = mapSectionTwoColumns({
      __component: 'section.section-two-columns',
      _id: '6144e3d936263b01a86bd72d',
      title: 'title',
      description: 'abc',
      metadata: {
        background: true,
        _id: '6144e3da36263b01a86bd734',
        section_id: 'home',
        name: 'Home',
        __v: 0,
        id: '6144e3da36263b01a86bd734',
      },
      __v: 1,
      image: {
        _id: '6144d65636263b01a86bd725',
        name: 'javascript.svg',
        alternativeText: 'Desenho de pessoas segurando logos do CSS JS e HTML',
        caption: 'Desenho de pessoas segurando logos do CSS JS e HTML',
        hash: 'javascript_21804b77b9',
        ext: '.svg',
        mime: 'image/svg+xml',
        size: 30.31,
        url: 'a.svg',
        provider_metadata: {
          public_id: 'javascript_21804b77b9',
          resource_type: 'image',
        },
        provider: 'cloudinary',
        width: 1030,
        height: 730,
        related: ['6144e3d936263b01a86bd72d', '6144e3d936263b01a86bd733'],
        createdAt: '2021-09-17T17:54:30.254Z',
        updatedAt: '2021-09-17T18:52:11.441Z',
        __v: 0,
        id: '6144d65636263b01a86bd725',
      },
      id: '6144e3d936263b01a86bd72d',
    });
    expect(data.background).toBe(true);
    expect(data.component).toBe('section.section-two-columns');
    expect(data.sectionId).toBe('home');
    expect(data.srcImg).toBe('a.svg');
    expect(data.text).toBe('abc');
    expect(data.title).toBe('title');
  });

  it('should map section content with no data', () => {
    const data = mapSectionContent();
    expect(data.background).toBe(false);
    expect(data.component).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.title).toBe('');
    expect(data.html).toBe('');
  });

  it('should map section content', () => {
    const data = mapSectionContent({
      __component: 'section.section-content',
      _id: '6144e3d936263b01a86bd72e',
      title: 'pricing',
      content: 'abc',
      metadata: {
        background: false,
        _id: '6144e3da36263b01a86bd735',
        name: 'Intro',
        section_id: 'intro',
        __v: 0,
        id: '6144e3da36263b01a86bd735',
      },
      __v: 1,
      id: '6144e3d936263b01a86bd72e',
    });
    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-content');
    expect(data.sectionId).toBe('intro');
    expect(data.title).toBe('pricing');
    expect(data.html).toBe('abc');
  });
});
