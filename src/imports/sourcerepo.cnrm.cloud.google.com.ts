// generated by cdk8s
import { ApiObject, ApiObjectMetadata, GroupVersionKind } from 'cdk8s';
import { Construct } from 'constructs';


/**
 *
 *
 * @schema SourceRepoRepository
 */
export class SourceRepoRepository extends ApiObject {
  /**
   * Returns the apiVersion and kind for "SourceRepoRepository"
   */
  public static readonly GVK: GroupVersionKind = {
    apiVersion: 'sourcerepo.cnrm.cloud.google.com/v1beta1',
    kind: 'SourceRepoRepository',
  }

  /**
   * Renders a Kubernetes manifest for "SourceRepoRepository".
   *
   * This can be used to inline resource manifests inside other objects (e.g. as templates).
   *
   * @param props initialization props
   */
  public static manifest(props: SourceRepoRepositoryProps = {}): any {
    return {
      ...SourceRepoRepository.GVK,
      ...toJson_SourceRepoRepositoryProps(props),
    };
  }

  /**
   * Defines a "SourceRepoRepository" API object
   * @param scope the scope in which to define this object
   * @param id a scope-local name for the object
   * @param props initialization props
   */
  public constructor(scope: Construct, id: string, props: SourceRepoRepositoryProps = {}) {
    super(scope, id, {
      ...SourceRepoRepository.GVK,
      ...props,
    });
  }

  /**
   * Renders the object to Kubernetes JSON.
   */
  public toJson(): any {
    const resolved = super.toJson();

    return {
      ...SourceRepoRepository.GVK,
      ...toJson_SourceRepoRepositoryProps(resolved),
    };
  }
}

/**
 * @schema SourceRepoRepository
 */
export interface SourceRepoRepositoryProps {
  /**
   * @schema SourceRepoRepository#metadata
   */
  readonly metadata?: ApiObjectMetadata;

  /**
   * @schema SourceRepoRepository#spec
   */
  readonly spec?: SourceRepoRepositorySpec;

}

/**
 * Converts an object of type 'SourceRepoRepositoryProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SourceRepoRepositoryProps(obj: SourceRepoRepositoryProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'metadata': obj.metadata,
    'spec': toJson_SourceRepoRepositorySpec(obj.spec),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SourceRepoRepositorySpec
 */
export interface SourceRepoRepositorySpec {
  /**
   * How this repository publishes a change in the repository through Cloud Pub/Sub.
   * Keyed by the topic names.
   *
   * @schema SourceRepoRepositorySpec#pubsubConfigs
   */
  readonly pubsubConfigs?: SourceRepoRepositorySpecPubsubConfigs[];

  /**
   * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
   *
   * @schema SourceRepoRepositorySpec#resourceID
   */
  readonly resourceId?: string;

}

/**
 * Converts an object of type 'SourceRepoRepositorySpec' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SourceRepoRepositorySpec(obj: SourceRepoRepositorySpec | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'pubsubConfigs': obj.pubsubConfigs?.map(y => toJson_SourceRepoRepositorySpecPubsubConfigs(y)),
    'resourceID': obj.resourceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema SourceRepoRepositorySpecPubsubConfigs
 */
export interface SourceRepoRepositorySpecPubsubConfigs {
  /**
   * The format of the Cloud Pub/Sub messages.
   * - PROTOBUF: The message payload is a serialized protocol buffer of SourceRepoEvent.
   * - JSON: The message payload is a JSON string of SourceRepoEvent. Possible values: ["PROTOBUF", "JSON"].
   *
   * @schema SourceRepoRepositorySpecPubsubConfigs#messageFormat
   */
  readonly messageFormat: string;

  /**
   * Service account used for publishing Cloud Pub/Sub messages. This
   * service account needs to be in the same project as the
   * pubsubConfig. When added, the caller needs to have
   * iam.serviceAccounts.actAs permission on this service account. If
   * unspecified, it defaults to the compute engine default service
   * account.
   *
   * @schema SourceRepoRepositorySpecPubsubConfigs#serviceAccountRef
   */
  readonly serviceAccountRef?: SourceRepoRepositorySpecPubsubConfigsServiceAccountRef;

  /**
   * @schema SourceRepoRepositorySpecPubsubConfigs#topicRef
   */
  readonly topicRef: SourceRepoRepositorySpecPubsubConfigsTopicRef;

}

/**
 * Converts an object of type 'SourceRepoRepositorySpecPubsubConfigs' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SourceRepoRepositorySpecPubsubConfigs(obj: SourceRepoRepositorySpecPubsubConfigs | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'messageFormat': obj.messageFormat,
    'serviceAccountRef': toJson_SourceRepoRepositorySpecPubsubConfigsServiceAccountRef(obj.serviceAccountRef),
    'topicRef': toJson_SourceRepoRepositorySpecPubsubConfigsTopicRef(obj.topicRef),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Service account used for publishing Cloud Pub/Sub messages. This
 * service account needs to be in the same project as the
 * pubsubConfig. When added, the caller needs to have
 * iam.serviceAccounts.actAs permission on this service account. If
 * unspecified, it defaults to the compute engine default service
 * account.
 *
 * @schema SourceRepoRepositorySpecPubsubConfigsServiceAccountRef
 */
export interface SourceRepoRepositorySpecPubsubConfigsServiceAccountRef {
  /**
   * Allowed value: The `email` field of an `IAMServiceAccount` resource.
   *
   * @schema SourceRepoRepositorySpecPubsubConfigsServiceAccountRef#external
   */
  readonly external?: string;

  /**
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   *
   * @schema SourceRepoRepositorySpecPubsubConfigsServiceAccountRef#name
   */
  readonly name?: string;

  /**
   * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
   *
   * @schema SourceRepoRepositorySpecPubsubConfigsServiceAccountRef#namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'SourceRepoRepositorySpecPubsubConfigsServiceAccountRef' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SourceRepoRepositorySpecPubsubConfigsServiceAccountRef(obj: SourceRepoRepositorySpecPubsubConfigsServiceAccountRef | undefined): Record<string, any> | undefined {
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
 * @schema SourceRepoRepositorySpecPubsubConfigsTopicRef
 */
export interface SourceRepoRepositorySpecPubsubConfigsTopicRef {
  /**
   * Allowed value: The `name` field of a `PubSubTopic` resource.
   *
   * @schema SourceRepoRepositorySpecPubsubConfigsTopicRef#external
   */
  readonly external?: string;

  /**
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   *
   * @schema SourceRepoRepositorySpecPubsubConfigsTopicRef#name
   */
  readonly name?: string;

  /**
   * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
   *
   * @schema SourceRepoRepositorySpecPubsubConfigsTopicRef#namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'SourceRepoRepositorySpecPubsubConfigsTopicRef' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_SourceRepoRepositorySpecPubsubConfigsTopicRef(obj: SourceRepoRepositorySpecPubsubConfigsTopicRef | undefined): Record<string, any> | undefined {
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

