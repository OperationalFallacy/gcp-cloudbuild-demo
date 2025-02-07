// generated by cdk8s
import { ApiObject, ApiObjectMetadata, GroupVersionKind } from 'cdk8s';
import { Construct } from 'constructs';


/**
 *
 *
 * @schema DataCatalogPolicyTag
 */
export class DataCatalogPolicyTag extends ApiObject {
  /**
   * Returns the apiVersion and kind for "DataCatalogPolicyTag"
   */
  public static readonly GVK: GroupVersionKind = {
    apiVersion: 'datacatalog.cnrm.cloud.google.com/v1beta1',
    kind: 'DataCatalogPolicyTag',
  }

  /**
   * Renders a Kubernetes manifest for "DataCatalogPolicyTag".
   *
   * This can be used to inline resource manifests inside other objects (e.g. as templates).
   *
   * @param props initialization props
   */
  public static manifest(props: DataCatalogPolicyTagProps): any {
    return {
      ...DataCatalogPolicyTag.GVK,
      ...toJson_DataCatalogPolicyTagProps(props),
    };
  }

  /**
   * Defines a "DataCatalogPolicyTag" API object
   * @param scope the scope in which to define this object
   * @param id a scope-local name for the object
   * @param props initialization props
   */
  public constructor(scope: Construct, id: string, props: DataCatalogPolicyTagProps) {
    super(scope, id, {
      ...DataCatalogPolicyTag.GVK,
      ...props,
    });
  }

  /**
   * Renders the object to Kubernetes JSON.
   */
  public toJson(): any {
    const resolved = super.toJson();

    return {
      ...DataCatalogPolicyTag.GVK,
      ...toJson_DataCatalogPolicyTagProps(resolved),
    };
  }
}

/**
 * @schema DataCatalogPolicyTag
 */
export interface DataCatalogPolicyTagProps {
  /**
   * @schema DataCatalogPolicyTag#metadata
   */
  readonly metadata?: ApiObjectMetadata;

  /**
   * @schema DataCatalogPolicyTag#spec
   */
  readonly spec: DataCatalogPolicyTagSpec;

}

/**
 * Converts an object of type 'DataCatalogPolicyTagProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataCatalogPolicyTagProps(obj: DataCatalogPolicyTagProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'metadata': obj.metadata,
    'spec': toJson_DataCatalogPolicyTagSpec(obj.spec),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataCatalogPolicyTagSpec
 */
export interface DataCatalogPolicyTagSpec {
  /**
   * Description of this policy tag. It must: contain only unicode characters, tabs,
   * newlines, carriage returns and page breaks; and be at most 2000 bytes long when
   * encoded in UTF-8. If not set, defaults to an empty description.
   * If not set, defaults to an empty description.
   *
   * @schema DataCatalogPolicyTagSpec#description
   */
  readonly description?: string;

  /**
   * User defined name of this policy tag. It must: be unique within the parent
   * taxonomy; contain only unicode letters, numbers, underscores, dashes and spaces;
   * not start or end with spaces; and be at most 200 bytes long when encoded in UTF-8.
   *
   * @schema DataCatalogPolicyTagSpec#displayName
   */
  readonly displayName: string;

  /**
   * @schema DataCatalogPolicyTagSpec#parentPolicyTagRef
   */
  readonly parentPolicyTagRef?: DataCatalogPolicyTagSpecParentPolicyTagRef;

  /**
   * Immutable. Optional. The service-generated name of the resource. Used for acquisition only. Leave unset to create a new resource.
   *
   * @schema DataCatalogPolicyTagSpec#resourceID
   */
  readonly resourceId?: string;

  /**
   * @schema DataCatalogPolicyTagSpec#taxonomyRef
   */
  readonly taxonomyRef: DataCatalogPolicyTagSpecTaxonomyRef;

}

/**
 * Converts an object of type 'DataCatalogPolicyTagSpec' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataCatalogPolicyTagSpec(obj: DataCatalogPolicyTagSpec | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'description': obj.description,
    'displayName': obj.displayName,
    'parentPolicyTagRef': toJson_DataCatalogPolicyTagSpecParentPolicyTagRef(obj.parentPolicyTagRef),
    'resourceID': obj.resourceId,
    'taxonomyRef': toJson_DataCatalogPolicyTagSpecTaxonomyRef(obj.taxonomyRef),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataCatalogPolicyTagSpecParentPolicyTagRef
 */
export interface DataCatalogPolicyTagSpecParentPolicyTagRef {
  /**
   * Allowed value: The `name` field of a `DataCatalogPolicyTag` resource.
   *
   * @schema DataCatalogPolicyTagSpecParentPolicyTagRef#external
   */
  readonly external?: string;

  /**
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   *
   * @schema DataCatalogPolicyTagSpecParentPolicyTagRef#name
   */
  readonly name?: string;

  /**
   * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
   *
   * @schema DataCatalogPolicyTagSpecParentPolicyTagRef#namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'DataCatalogPolicyTagSpecParentPolicyTagRef' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataCatalogPolicyTagSpecParentPolicyTagRef(obj: DataCatalogPolicyTagSpecParentPolicyTagRef | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'external': obj.external,
    'name': obj.name,
    'namespace': obj.namespace,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataCatalogPolicyTagSpecTaxonomyRef
 */
export interface DataCatalogPolicyTagSpecTaxonomyRef {
  /**
   * Allowed value: The `name` field of a `DataCatalogTaxonomy` resource.
   *
   * @schema DataCatalogPolicyTagSpecTaxonomyRef#external
   */
  readonly external?: string;

  /**
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   *
   * @schema DataCatalogPolicyTagSpecTaxonomyRef#name
   */
  readonly name?: string;

  /**
   * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
   *
   * @schema DataCatalogPolicyTagSpecTaxonomyRef#namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'DataCatalogPolicyTagSpecTaxonomyRef' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataCatalogPolicyTagSpecTaxonomyRef(obj: DataCatalogPolicyTagSpecTaxonomyRef | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'external': obj.external,
    'name': obj.name,
    'namespace': obj.namespace,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */


/**
 *
 *
 * @schema DataCatalogTaxonomy
 */
export class DataCatalogTaxonomy extends ApiObject {
  /**
   * Returns the apiVersion and kind for "DataCatalogTaxonomy"
   */
  public static readonly GVK: GroupVersionKind = {
    apiVersion: 'datacatalog.cnrm.cloud.google.com/v1beta1',
    kind: 'DataCatalogTaxonomy',
  }

  /**
   * Renders a Kubernetes manifest for "DataCatalogTaxonomy".
   *
   * This can be used to inline resource manifests inside other objects (e.g. as templates).
   *
   * @param props initialization props
   */
  public static manifest(props: DataCatalogTaxonomyProps): any {
    return {
      ...DataCatalogTaxonomy.GVK,
      ...toJson_DataCatalogTaxonomyProps(props),
    };
  }

  /**
   * Defines a "DataCatalogTaxonomy" API object
   * @param scope the scope in which to define this object
   * @param id a scope-local name for the object
   * @param props initialization props
   */
  public constructor(scope: Construct, id: string, props: DataCatalogTaxonomyProps) {
    super(scope, id, {
      ...DataCatalogTaxonomy.GVK,
      ...props,
    });
  }

  /**
   * Renders the object to Kubernetes JSON.
   */
  public toJson(): any {
    const resolved = super.toJson();

    return {
      ...DataCatalogTaxonomy.GVK,
      ...toJson_DataCatalogTaxonomyProps(resolved),
    };
  }
}

/**
 * @schema DataCatalogTaxonomy
 */
export interface DataCatalogTaxonomyProps {
  /**
   * @schema DataCatalogTaxonomy#metadata
   */
  readonly metadata?: ApiObjectMetadata;

  /**
   * @schema DataCatalogTaxonomy#spec
   */
  readonly spec: DataCatalogTaxonomySpec;

}

/**
 * Converts an object of type 'DataCatalogTaxonomyProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataCatalogTaxonomyProps(obj: DataCatalogTaxonomyProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'metadata': obj.metadata,
    'spec': toJson_DataCatalogTaxonomySpec(obj.spec),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema DataCatalogTaxonomySpec
 */
export interface DataCatalogTaxonomySpec {
  /**
   * A list of policy types that are activated for this taxonomy. If not set,
   * defaults to an empty list. Possible values: ["POLICY_TYPE_UNSPECIFIED", "FINE_GRAINED_ACCESS_CONTROL"].
   *
   * @schema DataCatalogTaxonomySpec#activatedPolicyTypes
   */
  readonly activatedPolicyTypes?: string[];

  /**
   * Description of this taxonomy. It must: contain only unicode characters,
   * tabs, newlines, carriage returns and page breaks; and be at most 2000 bytes
   * long when encoded in UTF-8. If not set, defaults to an empty description.
   *
   * @schema DataCatalogTaxonomySpec#description
   */
  readonly description?: string;

  /**
   * User defined name of this taxonomy.
   * It must: contain only unicode letters, numbers, underscores, dashes
   * and spaces; not start or end with spaces; and be at most 200 bytes
   * long when encoded in UTF-8.
   *
   * @schema DataCatalogTaxonomySpec#displayName
   */
  readonly displayName: string;

  /**
   * The project that this resource belongs to.
   *
   * @schema DataCatalogTaxonomySpec#projectRef
   */
  readonly projectRef: DataCatalogTaxonomySpecProjectRef;

  /**
   * Immutable. Taxonomy location region.
   *
   * @schema DataCatalogTaxonomySpec#region
   */
  readonly region?: string;

  /**
   * Immutable. Optional. The service-generated name of the resource. Used for acquisition only. Leave unset to create a new resource.
   *
   * @schema DataCatalogTaxonomySpec#resourceID
   */
  readonly resourceId?: string;

}

/**
 * Converts an object of type 'DataCatalogTaxonomySpec' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataCatalogTaxonomySpec(obj: DataCatalogTaxonomySpec | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'activatedPolicyTypes': obj.activatedPolicyTypes?.map(y => y),
    'description': obj.description,
    'displayName': obj.displayName,
    'projectRef': toJson_DataCatalogTaxonomySpecProjectRef(obj.projectRef),
    'region': obj.region,
    'resourceID': obj.resourceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * The project that this resource belongs to.
 *
 * @schema DataCatalogTaxonomySpecProjectRef
 */
export interface DataCatalogTaxonomySpecProjectRef {
  /**
   * Allowed value: The `name` field of a `Project` resource.
   *
   * @schema DataCatalogTaxonomySpecProjectRef#external
   */
  readonly external?: string;

  /**
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   *
   * @schema DataCatalogTaxonomySpecProjectRef#name
   */
  readonly name?: string;

  /**
   * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
   *
   * @schema DataCatalogTaxonomySpecProjectRef#namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'DataCatalogTaxonomySpecProjectRef' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DataCatalogTaxonomySpecProjectRef(obj: DataCatalogTaxonomySpecProjectRef | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'external': obj.external,
    'name': obj.name,
    'namespace': obj.namespace,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

