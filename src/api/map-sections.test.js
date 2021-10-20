import {
  mapSectionContent,
  mapSections,
  mapSectionTwoColumns,
  mapTextGrid,
  mapImageGrid,
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

  it('should map grid text with data', () => {
    const data = mapTextGrid({
      __component: 'section.section-grid',
      _id: '6144e3d936263b01a86bd72f',
      title: 'My Grid',
      description: 'abc',
      text_grid: [
        {
          _id: '6144e3da36263b01a86bd736',
          title: 'Teste 1',
          description: 'Coisa',
          __v: 0,
          id: '6144e3da36263b01a86bd736',
        },
        {
          _id: '6144e3da36263b01a86bd737',
          title: 'Teste 2',
          description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.',
          __v: 0,
          id: '6144e3da36263b01a86bd737',
        },
        {
          _id: '6144e3da36263b01a86bd738',
          title: 'Teste 3',
          description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.',
          __v: 0,
          id: '6144e3da36263b01a86bd738',
        },
      ],
      image_grid: [],
      metadata: {
        background: true,
        _id: '6144e3db36263b01a86bd754',
        name: 'grid-one',
        section_id: 'grid-one',
        __v: 0,
        id: '6144e3db36263b01a86bd754',
      },
      __v: 2,
      id: '6144e3d936263b01a86bd72f',
    });
    expect(data.background).toBe(true);
    expect(data.component).toBe('section.section-grid-text');
    expect(data.sectionId).toBe('grid-one');
    expect(data.title).toBe('My Grid');
    expect(data.description).toBe('abc');
    expect(data.grid[0].title).toBe('Teste 1');
    expect(data.grid[0].description).toBe('Coisa');
  });

  it('should map grid without data', () => {
    const data = mapTextGrid(undefined);
    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-grid-text');
    expect(data.sectionId).toBe('');
    expect(data.title).toBe('');
    expect(data.description).toBe('');
  });

  it('should map grid image without data', () => {
    const data = mapImageGrid(undefined);
    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-grid-image');
    expect(data.sectionId).toBe('');
    expect(data.title).toBe('');
    expect(data.description).toBe('');
  });

  it('should map grid image with data', () => {
    const data = mapImageGrid({
      __component: 'section.section-grid',
      _id: '6144e3d936263b01a86bd730',
      title: 'Gallery',
      description: 'abc',
      text_grid: [],
      image_grid: [
        {
          _id: '6144e3da36263b01a86bd739',
          __v: 0,
          image: {
            _id: '6144dfb436263b01a86bd72c',
            name: 'https://images.unsplash.com/photo-1593545203647-85aad8da3601?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=360&ixid=MnwxfDB8MXxyYW5kb218MHx8cnx8fHx8fDE2MzE5MDM0Mzk&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=360',
            alternativeText: 'abc',
            caption: '',
            hash: 'photo_1593545203647_85aad8da3601_crop_entropy_and_cs_tinysrgb_and_fit_crop_and_fm_jpg_and_h_360_and_ixid_Mnwxf_DB_8_M_Xxy_YW_5kb218_M_Hx8cnx8f_Hx8f_DE_2_Mz_E5_MDM_0_Mzk_and_ixlib_rb_1_2_01ad966695',
            ext: '.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=360',
            mime: 'image/jpeg',
            size: 24.52,
            width: 360,
            height: 360,
            url: 'a.svg',
            provider_metadata: {
              public_id:
                'photo_1593545203647_85aad8da3601_crop_entropy_and_cs_tinysrgb_and_fit_crop_and_fm_jpg_and_h_360_and_ixid_Mnwxf_DB_8_M_Xxy_YW_5kb218_M_Hx8cnx8f_Hx8f_DE_2_Mz_E5_MDM_0_Mzk_and_ixlib_rb_1_2_01ad966695',
              resource_type: 'image',
            },
            formats: {
              thumbnail: {
                name: 'thumbnail_https://images.unsplash.com/photo-1593545203647-85aad8da3601?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=360&ixid=MnwxfDB8MXxyYW5kb218MHx8cnx8fHx8fDE2MzE5MDM0Mzk&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=360',
                hash: 'thumbnail_photo_1593545203647_85aad8da3601_crop_entropy_and_cs_tinysrgb_and_fit_crop_and_fm_jpg_and_h_360_and_ixid_Mnwxf_DB_8_M_Xxy_YW_5kb218_M_Hx8cnx8f_Hx8f_DE_2_Mz_E5_MDM_0_Mzk_and_ixlib_rb_1_2_01ad966695',
                ext: '.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=360',
                mime: 'image/jpeg',
                width: 156,
                height: 156,
                size: 6.14,
                path: null,
                url: 'https://res.cloudinary.com/projeto-react/image/upload/v1631903667/thumbnail_photo_1593545203647_85aad8da3601_crop_entropy_and_cs_tinysrgb_and_fit_crop_and_fm_jpg_and_h_360_and_ixid_Mnwxf_DB_8_M_Xxy_YW_5kb218_M_Hx8cnx8f_Hx8f_DE_2_Mz_E5_MDM_0_Mzk_and_ixlib_rb_1_2_01ad966695.jpg',
                provider_metadata: {
                  public_id:
                    'thumbnail_photo_1593545203647_85aad8da3601_crop_entropy_and_cs_tinysrgb_and_fit_crop_and_fm_jpg_and_h_360_and_ixid_Mnwxf_DB_8_M_Xxy_YW_5kb218_M_Hx8cnx8f_Hx8f_DE_2_Mz_E5_MDM_0_Mzk_and_ixlib_rb_1_2_01ad966695',
                  resource_type: 'image',
                },
              },
            },
            provider: 'cloudinary',
            related: ['6144e3da36263b01a86bd739'],
            createdAt: '2021-09-17T18:34:28.399Z',
            updatedAt: '2021-09-17T18:52:10.688Z',
            __v: 0,
            id: '6144dfb436263b01a86bd72c',
          },
          id: '6144e3da36263b01a86bd739',
        },
        {
          _id: '6144e3da36263b01a86bd73a',
          __v: 0,
          image: {
            _id: '6144dfb436263b01a86bd72b',
            name: 'https://images.unsplash.com/photo-1596918795325-712bfbaead11?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=360&ixid=MnwxfDB8MXxyYW5kb218MHx8cnx8fHx8fDE2MzE5MDMyNjc&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=360',
            alternativeText: 'Um vale com cachoeira',
            caption: '',
            hash: 'photo_1596918795325_712bfbaead11_crop_entropy_and_cs_tinysrgb_and_fit_crop_and_fm_jpg_and_h_360_and_ixid_Mnwxf_DB_8_M_Xxy_YW_5kb218_M_Hx8cnx8f_Hx8f_DE_2_Mz_E5_MD_My_Njc_and_ixlib_rb_1_2_e3b7ce8cb4',
            ext: '.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=360',
            mime: 'image/jpeg',
            size: 18.89,
            width: 360,
            height: 360,
            url: 'https://res.cloudinary.com/projeto-react/image/upload/v1631903666/photo_1596918795325_712bfbaead11_crop_entropy_and_cs_tinysrgb_and_fit_crop_and_fm_jpg_and_h_360_and_ixid_Mnwxf_DB_8_M_Xxy_YW_5kb218_M_Hx8cnx8f_Hx8f_DE_2_Mz_E5_MD_My_Njc_and_ixlib_rb_1_2_e3b7ce8cb4.jpg',
            provider_metadata: {
              public_id:
                'photo_1596918795325_712bfbaead11_crop_entropy_and_cs_tinysrgb_and_fit_crop_and_fm_jpg_and_h_360_and_ixid_Mnwxf_DB_8_M_Xxy_YW_5kb218_M_Hx8cnx8f_Hx8f_DE_2_Mz_E5_MD_My_Njc_and_ixlib_rb_1_2_e3b7ce8cb4',
              resource_type: 'image',
            },
            formats: {
              thumbnail: {
                name: 'thumbnail_https://images.unsplash.com/photo-1596918795325-712bfbaead11?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=360&ixid=MnwxfDB8MXxyYW5kb218MHx8cnx8fHx8fDE2MzE5MDMyNjc&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=360',
                hash: 'thumbnail_photo_1596918795325_712bfbaead11_crop_entropy_and_cs_tinysrgb_and_fit_crop_and_fm_jpg_and_h_360_and_ixid_Mnwxf_DB_8_M_Xxy_YW_5kb218_M_Hx8cnx8f_Hx8f_DE_2_Mz_E5_MD_My_Njc_and_ixlib_rb_1_2_e3b7ce8cb4',
                ext: '.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=360',
                mime: 'image/jpeg',
                width: 156,
                height: 156,
                size: 4.66,
                path: null,
                url: 'https://res.cloudinary.com/projeto-react/image/upload/v1631903667/thumbnail_photo_1596918795325_712bfbaead11_crop_entropy_and_cs_tinysrgb_and_fit_crop_and_fm_jpg_and_h_360_and_ixid_Mnwxf_DB_8_M_Xxy_YW_5kb218_M_Hx8cnx8f_Hx8f_DE_2_Mz_E5_MD_My_Njc_and_ixlib_rb_1_2_e3b7ce8cb4.jpg',
                provider_metadata: {
                  public_id:
                    'thumbnail_photo_1596918795325_712bfbaead11_crop_entropy_and_cs_tinysrgb_and_fit_crop_and_fm_jpg_and_h_360_and_ixid_Mnwxf_DB_8_M_Xxy_YW_5kb218_M_Hx8cnx8f_Hx8f_DE_2_Mz_E5_MD_My_Njc_and_ixlib_rb_1_2_e3b7ce8cb4',
                  resource_type: 'image',
                },
              },
            },
            provider: 'cloudinary',
            related: ['6144e3da36263b01a86bd73a'],
            createdAt: '2021-09-17T18:34:28.259Z',
            updatedAt: '2021-09-17T18:52:10.704Z',
            __v: 0,
            id: '6144dfb436263b01a86bd72b',
          },
          id: '6144e3da36263b01a86bd73a',
        },
        {
          _id: '6144e3da36263b01a86bd73b',
          __v: 0,
          image: {
            _id: '6144dfb436263b01a86bd72a',
            name: 'https://images.unsplash.com/photo-1606685592997-865a467721f4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=360&ixid=MnwxfDB8MXxyYW5kb218MHx8cnx8fHx8fDE2MzE5MDM0MTA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=360',
            alternativeText: 'Uma paisagem do mar',
            caption: '',
            hash: 'photo_1606685592997_865a467721f4_crop_entropy_and_cs_tinysrgb_and_fit_crop_and_fm_jpg_and_h_360_and_ixid_Mnwxf_DB_8_M_Xxy_YW_5kb218_M_Hx8cnx8f_Hx8f_DE_2_Mz_E5_MDM_0_MTA_and_ixlib_rb_1_2_f1a700790d',
            ext: '.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=360',
            mime: 'image/jpeg',
            size: 16.56,
            width: 360,
            height: 360,
            url: 'https://res.cloudinary.com/projeto-react/image/upload/v1631903666/photo_1606685592997_865a467721f4_crop_entropy_and_cs_tinysrgb_and_fit_crop_and_fm_jpg_and_h_360_and_ixid_Mnwxf_DB_8_M_Xxy_YW_5kb218_M_Hx8cnx8f_Hx8f_DE_2_Mz_E5_MDM_0_MTA_and_ixlib_rb_1_2_f1a700790d.jpg',
            provider_metadata: {
              public_id:
                'photo_1606685592997_865a467721f4_crop_entropy_and_cs_tinysrgb_and_fit_crop_and_fm_jpg_and_h_360_and_ixid_Mnwxf_DB_8_M_Xxy_YW_5kb218_M_Hx8cnx8f_Hx8f_DE_2_Mz_E5_MDM_0_MTA_and_ixlib_rb_1_2_f1a700790d',
              resource_type: 'image',
            },
            formats: {
              thumbnail: {
                name: 'thumbnail_https://images.unsplash.com/photo-1606685592997-865a467721f4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=360&ixid=MnwxfDB8MXxyYW5kb218MHx8cnx8fHx8fDE2MzE5MDM0MTA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=360',
                hash: 'thumbnail_photo_1606685592997_865a467721f4_crop_entropy_and_cs_tinysrgb_and_fit_crop_and_fm_jpg_and_h_360_and_ixid_Mnwxf_DB_8_M_Xxy_YW_5kb218_M_Hx8cnx8f_Hx8f_DE_2_Mz_E5_MDM_0_MTA_and_ixlib_rb_1_2_f1a700790d',
                ext: '.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=360',
                mime: 'image/jpeg',
                width: 156,
                height: 156,
                size: 4.18,
                path: null,
                url: 'https://res.cloudinary.com/projeto-react/image/upload/v1631903667/thumbnail_photo_1606685592997_865a467721f4_crop_entropy_and_cs_tinysrgb_and_fit_crop_and_fm_jpg_and_h_360_and_ixid_Mnwxf_DB_8_M_Xxy_YW_5kb218_M_Hx8cnx8f_Hx8f_DE_2_Mz_E5_MDM_0_MTA_and_ixlib_rb_1_2_f1a700790d.jpg',
                provider_metadata: {
                  public_id:
                    'thumbnail_photo_1606685592997_865a467721f4_crop_entropy_and_cs_tinysrgb_and_fit_crop_and_fm_jpg_and_h_360_and_ixid_Mnwxf_DB_8_M_Xxy_YW_5kb218_M_Hx8cnx8f_Hx8f_DE_2_Mz_E5_MDM_0_MTA_and_ixlib_rb_1_2_f1a700790d',
                  resource_type: 'image',
                },
              },
            },
            provider: 'cloudinary',
            related: ['6144e3da36263b01a86bd73b'],
            createdAt: '2021-09-17T18:34:28.253Z',
            updatedAt: '2021-09-17T18:52:10.707Z',
            __v: 0,
            id: '6144dfb436263b01a86bd72a',
          },
          id: '6144e3da36263b01a86bd73b',
        },
        {
          _id: '6144e3da36263b01a86bd73c',
          __v: 0,
          image: {
            _id: '6144dfb436263b01a86bd729',
            name: 'https://images.unsplash.com/photo-1563218930-d5f4f022936c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=360&ixid=MnwxfDB8MXxyYW5kb218MHx8cnx8fHx8fDE2MzE5MDMzODU&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=360',
            alternativeText: 'Uma mulher loira',
            caption: '',
            hash: 'photo_1563218930_d5f4f022936c_crop_entropy_and_cs_tinysrgb_and_fit_crop_and_fm_jpg_and_h_360_and_ixid_Mnwxf_DB_8_M_Xxy_YW_5kb218_M_Hx8cnx8f_Hx8f_DE_2_Mz_E5_MD_Mz_ODU_and_ixlib_rb_1_2_3ef025862a',
            ext: '.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=360',
            mime: 'image/jpeg',
            size: 24.71,
            width: 360,
            height: 360,
            url: 'https://res.cloudinary.com/projeto-react/image/upload/v1631903666/photo_1563218930_d5f4f022936c_crop_entropy_and_cs_tinysrgb_and_fit_crop_and_fm_jpg_and_h_360_and_ixid_Mnwxf_DB_8_M_Xxy_YW_5kb218_M_Hx8cnx8f_Hx8f_DE_2_Mz_E5_MD_Mz_ODU_and_ixlib_rb_1_2_3ef025862a.jpg',
            provider_metadata: {
              public_id:
                'photo_1563218930_d5f4f022936c_crop_entropy_and_cs_tinysrgb_and_fit_crop_and_fm_jpg_and_h_360_and_ixid_Mnwxf_DB_8_M_Xxy_YW_5kb218_M_Hx8cnx8f_Hx8f_DE_2_Mz_E5_MD_Mz_ODU_and_ixlib_rb_1_2_3ef025862a',
              resource_type: 'image',
            },
            formats: {
              thumbnail: {
                name: 'thumbnail_https://images.unsplash.com/photo-1563218930-d5f4f022936c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=360&ixid=MnwxfDB8MXxyYW5kb218MHx8cnx8fHx8fDE2MzE5MDMzODU&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=360',
                hash: 'thumbnail_photo_1563218930_d5f4f022936c_crop_entropy_and_cs_tinysrgb_and_fit_crop_and_fm_jpg_and_h_360_and_ixid_Mnwxf_DB_8_M_Xxy_YW_5kb218_M_Hx8cnx8f_Hx8f_DE_2_Mz_E5_MD_Mz_ODU_and_ixlib_rb_1_2_3ef025862a',
                ext: '.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=360',
                mime: 'image/jpeg',
                width: 156,
                height: 156,
                size: 6.6,
                path: null,
                url: 'https://res.cloudinary.com/projeto-react/image/upload/v1631903667/thumbnail_photo_1563218930_d5f4f022936c_crop_entropy_and_cs_tinysrgb_and_fit_crop_and_fm_jpg_and_h_360_and_ixid_Mnwxf_DB_8_M_Xxy_YW_5kb218_M_Hx8cnx8f_Hx8f_DE_2_Mz_E5_MD_Mz_ODU_and_ixlib_rb_1_2_3ef025862a.jpg',
                provider_metadata: {
                  public_id:
                    'thumbnail_photo_1563218930_d5f4f022936c_crop_entropy_and_cs_tinysrgb_and_fit_crop_and_fm_jpg_and_h_360_and_ixid_Mnwxf_DB_8_M_Xxy_YW_5kb218_M_Hx8cnx8f_Hx8f_DE_2_Mz_E5_MD_Mz_ODU_and_ixlib_rb_1_2_3ef025862a',
                  resource_type: 'image',
                },
              },
            },
            provider: 'cloudinary',
            related: ['6144e3da36263b01a86bd73c'],
            createdAt: '2021-09-17T18:34:28.205Z',
            updatedAt: '2021-09-17T18:52:10.718Z',
            __v: 0,
            id: '6144dfb436263b01a86bd729',
          },
          id: '6144e3da36263b01a86bd73c',
        },
        {
          _id: '6144e3da36263b01a86bd73d',
          __v: 0,
          image: {
            _id: '6144dfb436263b01a86bd728',
            name: 'https://images.unsplash.com/photo-1612707894845-af2d2fe7b7f4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=360&ixid=MnwxfDB8MXxyYW5kb218MHx8cnx8fHx8fDE2MzE5MDM0MzE&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=360',
            alternativeText: 'Um conjunto de maquinas fotograficas',
            caption: '',
            hash: 'photo_1612707894845_af2d2fe7b7f4_crop_entropy_and_cs_tinysrgb_and_fit_crop_and_fm_jpg_and_h_360_and_ixid_Mnwxf_DB_8_M_Xxy_YW_5kb218_M_Hx8cnx8f_Hx8f_DE_2_Mz_E5_MDM_0_Mz_E_and_ixlib_rb_1_2_7398114a1a',
            ext: '.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=360',
            mime: 'image/jpeg',
            size: 26.21,
            width: 360,
            height: 360,
            url: 'https://res.cloudinary.com/projeto-react/image/upload/v1631903666/photo_1612707894845_af2d2fe7b7f4_crop_entropy_and_cs_tinysrgb_and_fit_crop_and_fm_jpg_and_h_360_and_ixid_Mnwxf_DB_8_M_Xxy_YW_5kb218_M_Hx8cnx8f_Hx8f_DE_2_Mz_E5_MDM_0_Mz_E_and_ixlib_rb_1_2_7398114a1a.jpg',
            provider_metadata: {
              public_id:
                'photo_1612707894845_af2d2fe7b7f4_crop_entropy_and_cs_tinysrgb_and_fit_crop_and_fm_jpg_and_h_360_and_ixid_Mnwxf_DB_8_M_Xxy_YW_5kb218_M_Hx8cnx8f_Hx8f_DE_2_Mz_E5_MDM_0_Mz_E_and_ixlib_rb_1_2_7398114a1a',
              resource_type: 'image',
            },
            formats: {
              thumbnail: {
                name: 'thumbnail_https://images.unsplash.com/photo-1612707894845-af2d2fe7b7f4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=360&ixid=MnwxfDB8MXxyYW5kb218MHx8cnx8fHx8fDE2MzE5MDM0MzE&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=360',
                hash: 'thumbnail_photo_1612707894845_af2d2fe7b7f4_crop_entropy_and_cs_tinysrgb_and_fit_crop_and_fm_jpg_and_h_360_and_ixid_Mnwxf_DB_8_M_Xxy_YW_5kb218_M_Hx8cnx8f_Hx8f_DE_2_Mz_E5_MDM_0_Mz_E_and_ixlib_rb_1_2_7398114a1a',
                ext: '.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=360',
                mime: 'image/jpeg',
                width: 156,
                height: 156,
                size: 6.33,
                path: null,
                url: 'https://res.cloudinary.com/projeto-react/image/upload/v1631903667/thumbnail_photo_1612707894845_af2d2fe7b7f4_crop_entropy_and_cs_tinysrgb_and_fit_crop_and_fm_jpg_and_h_360_and_ixid_Mnwxf_DB_8_M_Xxy_YW_5kb218_M_Hx8cnx8f_Hx8f_DE_2_Mz_E5_MDM_0_Mz_E_and_ixlib_rb_1_2_7398114a1a.jpg',
                provider_metadata: {
                  public_id:
                    'thumbnail_photo_1612707894845_af2d2fe7b7f4_crop_entropy_and_cs_tinysrgb_and_fit_crop_and_fm_jpg_and_h_360_and_ixid_Mnwxf_DB_8_M_Xxy_YW_5kb218_M_Hx8cnx8f_Hx8f_DE_2_Mz_E5_MDM_0_Mz_E_and_ixlib_rb_1_2_7398114a1a',
                  resource_type: 'image',
                },
              },
            },
            provider: 'cloudinary',
            related: ['6144e3da36263b01a86bd73d'],
            createdAt: '2021-09-17T18:34:28.187Z',
            updatedAt: '2021-09-17T18:52:10.747Z',
            __v: 0,
            id: '6144dfb436263b01a86bd728',
          },
          id: '6144e3da36263b01a86bd73d',
        },
        {
          _id: '6144e3da36263b01a86bd73e',
          __v: 0,
          image: {
            _id: '6144dfb436263b01a86bd727',
            name: 'https://images.unsplash.com/photo-1563456162378-f3b6b200289c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=360&ixid=MnwxfDB8MXxyYW5kb218MHx8cnx8fHx8fDE2MzE5MDM0MzU&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=360',
            alternativeText: 'Uma paisagem de roda de carro esportiva',
            caption: '',
            hash: 'photo_1563456162378_f3b6b200289c_crop_entropy_and_cs_tinysrgb_and_fit_crop_and_fm_jpg_and_h_360_and_ixid_Mnwxf_DB_8_M_Xxy_YW_5kb218_M_Hx8cnx8f_Hx8f_DE_2_Mz_E5_MDM_0_Mz_U_and_ixlib_rb_1_2_87935aff07',
            ext: '.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=360',
            mime: 'image/jpeg',
            size: 21.56,
            width: 360,
            height: 360,
            url: 'https://res.cloudinary.com/projeto-react/image/upload/v1631903666/photo_1563456162378_f3b6b200289c_crop_entropy_and_cs_tinysrgb_and_fit_crop_and_fm_jpg_and_h_360_and_ixid_Mnwxf_DB_8_M_Xxy_YW_5kb218_M_Hx8cnx8f_Hx8f_DE_2_Mz_E5_MDM_0_Mz_U_and_ixlib_rb_1_2_87935aff07.jpg',
            provider_metadata: {
              public_id:
                'photo_1563456162378_f3b6b200289c_crop_entropy_and_cs_tinysrgb_and_fit_crop_and_fm_jpg_and_h_360_and_ixid_Mnwxf_DB_8_M_Xxy_YW_5kb218_M_Hx8cnx8f_Hx8f_DE_2_Mz_E5_MDM_0_Mz_U_and_ixlib_rb_1_2_87935aff07',
              resource_type: 'image',
            },
            formats: {
              thumbnail: {
                name: 'thumbnail_https://images.unsplash.com/photo-1563456162378-f3b6b200289c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=360&ixid=MnwxfDB8MXxyYW5kb218MHx8cnx8fHx8fDE2MzE5MDM0MzU&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=360',
                hash: 'thumbnail_photo_1563456162378_f3b6b200289c_crop_entropy_and_cs_tinysrgb_and_fit_crop_and_fm_jpg_and_h_360_and_ixid_Mnwxf_DB_8_M_Xxy_YW_5kb218_M_Hx8cnx8f_Hx8f_DE_2_Mz_E5_MDM_0_Mz_U_and_ixlib_rb_1_2_87935aff07',
                ext: '.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=360',
                mime: 'image/jpeg',
                width: 156,
                height: 156,
                size: 5.7,
                path: null,
                url: 'https://res.cloudinary.com/projeto-react/image/upload/v1631903667/thumbnail_photo_1563456162378_f3b6b200289c_crop_entropy_and_cs_tinysrgb_and_fit_crop_and_fm_jpg_and_h_360_and_ixid_Mnwxf_DB_8_M_Xxy_YW_5kb218_M_Hx8cnx8f_Hx8f_DE_2_Mz_E5_MDM_0_Mz_U_and_ixlib_rb_1_2_87935aff07.jpg',
                provider_metadata: {
                  public_id:
                    'thumbnail_photo_1563456162378_f3b6b200289c_crop_entropy_and_cs_tinysrgb_and_fit_crop_and_fm_jpg_and_h_360_and_ixid_Mnwxf_DB_8_M_Xxy_YW_5kb218_M_Hx8cnx8f_Hx8f_DE_2_Mz_E5_MDM_0_Mz_U_and_ixlib_rb_1_2_87935aff07',
                  resource_type: 'image',
                },
              },
            },
            provider: 'cloudinary',
            related: ['6144e3da36263b01a86bd73e'],
            createdAt: '2021-09-17T18:34:28.106Z',
            updatedAt: '2021-09-17T18:52:10.750Z',
            __v: 0,
            id: '6144dfb436263b01a86bd727',
          },
          id: '6144e3da36263b01a86bd73e',
        },
      ],
      metadata: {
        background: false,
        _id: '6144e3db36263b01a86bd75f',
        name: 'gallery',
        section_id: 'gallery',
        __v: 0,
        id: '6144e3db36263b01a86bd75f',
      },
      __v: 2,
      id: '6144e3d936263b01a86bd730',
    });
    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-grid-image');
    expect(data.sectionId).toBe('gallery');
    expect(data.title).toBe('Gallery');
    expect(data.description).toBe('abc');
    expect(data.srcImg[0]).toBe('a.svg');
    expect(data.altTex[0]).toBe('abc');
  });
});
