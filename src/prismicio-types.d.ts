// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from '@prismicio/client';

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type HomepageDocumentDataSlicesSlice = WorkshopsSlice;

/**
 * Content for Homepage documents
 */
interface HomepageDocumentData {
	/**
	 * Slice Zone field in *Homepage*
	 *
	 * - **Field Type**: Slice Zone
	 * - **Placeholder**: *None*
	 * - **API ID Path**: homepage.slices[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#slices
	 */
	slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice>
	/**
	 * Meta Description field in *Homepage*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A brief summary of the page
	 * - **API ID Path**: homepage.meta_description
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */;
	meta_description: prismic.KeyTextField;

	/**
	 * Meta Image field in *Homepage*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: homepage.meta_image
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	meta_image: prismic.ImageField<never>;

	/**
	 * Meta Title field in *Homepage*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A title of the page used for social media and search engines
	 * - **API ID Path**: homepage.meta_title
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	meta_title: prismic.KeyTextField;
}

/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<
	Simplify<HomepageDocumentData>,
	'homepage',
	Lang
>;

type SpeakerDocumentDataSlicesSlice = WorkshopsSlice;

/**
 * Content for speaker documents
 */
interface SpeakerDocumentData {
	/**
	 * speakerimg field in *speaker*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: speaker.speakerimg
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	speakerimg: prismic.ImageField<never>;

	/**
	 * speaker name field in *speaker*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: speaker.speaker_name
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	speaker_name: prismic.KeyTextField;

	/**
	 * description field in *speaker*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: speaker.description
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	description: prismic.KeyTextField;

	/**
	 * Slice Zone field in *speaker*
	 *
	 * - **Field Type**: Slice Zone
	 * - **Placeholder**: *None*
	 * - **API ID Path**: speaker.slices[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#slices
	 */
	slices: prismic.SliceZone<SpeakerDocumentDataSlicesSlice>;
}

/**
 * speaker document from Prismic
 *
 * - **API ID**: `speaker`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SpeakerDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<
	Simplify<SpeakerDocumentData>,
	'speaker',
	Lang
>;

interface WorkshopDocumentData {}

/**
 * workshop document from Prismic
 *
 * - **API ID**: `workshop`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type WorkshopDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<
	Simplify<WorkshopDocumentData>,
	'workshop',
	Lang
>;

export type AllDocumentTypes = HomepageDocument | SpeakerDocument | WorkshopDocument;

/**
 * Primary content in *Speakers → Items*
 */
export interface SpeakersSliceDefaultItem {
	/**
	 * speakerimg field in *Speakers → Items*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: speakers.items[].speakerimg
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	speakerimg: prismic.ImageField<never>;

	/**
	 * speakername field in *Speakers → Items*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: speakers.items[].speaker_name
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	speaker_name: prismic.KeyTextField;

	/**
	 * linkspeaker field in *Speakers → Items*
	 *
	 * - **Field Type**: Content Relationship
	 * - **Placeholder**: *None*
	 * - **API ID Path**: speakers.items[].linkspeaker
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	linkspeaker: prismic.ContentRelationshipField;

	/**
	 * linkworkshop field in *Speakers → Items*
	 *
	 * - **Field Type**: Content Relationship
	 * - **Placeholder**: *None*
	 * - **API ID Path**: speakers.items[].linkworkshop
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	linkworkshop: prismic.ContentRelationshipField;
}

/**
 * Default variation for Speakers Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SpeakersSliceDefault = prismic.SharedSliceVariation<
	'default',
	Record<string, never>,
	Simplify<SpeakersSliceDefaultItem>
>;

/**
 * Slice variation for *Speakers*
 */
type SpeakersSliceVariation = SpeakersSliceDefault;

/**
 * Speakers Shared Slice
 *
 * - **API ID**: `speakers`
 * - **Description**: Speakers
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SpeakersSlice = prismic.SharedSlice<'speakers', SpeakersSliceVariation>;

/**
 * Primary content in *Workshops → Items*
 */
export interface WorkshopsSliceDefaultItem {
	/**
	 * workshoptitle field in *Workshops → Items*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: workshops.items[].workshoptitle
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	workshoptitle: prismic.RichTextField;

	/**
	 * description field in *Workshops → Items*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: workshops.items[].description
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	description: prismic.KeyTextField;

	/**
	 * linkworkshop field in *Workshops → Items*
	 *
	 * - **Field Type**: Content Relationship
	 * - **Placeholder**: *None*
	 * - **API ID Path**: workshops.items[].linkworkshop
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	linkworkshop: prismic.ContentRelationshipField;
}

/**
 * Default variation for Workshops Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type WorkshopsSliceDefault = prismic.SharedSliceVariation<
	'default',
	Record<string, never>,
	Simplify<WorkshopsSliceDefaultItem>
>;

/**
 * Slice variation for *Workshops*
 */
type WorkshopsSliceVariation = WorkshopsSliceDefault;

/**
 * Workshops Shared Slice
 *
 * - **API ID**: `workshops`
 * - **Description**: Workshops
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type WorkshopsSlice = prismic.SharedSlice<'workshops', WorkshopsSliceVariation>;

declare module '@prismicio/client' {
	interface CreateClient {
		(
			repositoryNameOrEndpoint: string,
			options?: prismic.ClientConfig
		): prismic.Client<AllDocumentTypes>;
	}

	namespace Content {
		export type {
			HomepageDocument,
			HomepageDocumentData,
			HomepageDocumentDataSlicesSlice,
			SpeakerDocument,
			SpeakerDocumentData,
			SpeakerDocumentDataSlicesSlice,
			WorkshopDocument,
			WorkshopDocumentData,
			AllDocumentTypes,
			SpeakersSlice,
			SpeakersSliceDefaultItem,
			SpeakersSliceVariation,
			SpeakersSliceDefault,
			WorkshopsSlice,
			WorkshopsSliceDefaultItem,
			WorkshopsSliceVariation,
			WorkshopsSliceDefault
		};
	}
}
