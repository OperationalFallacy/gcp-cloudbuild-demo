// generated by cdk8s
import { ApiObject, ApiObjectMetadata, GroupVersionKind } from 'cdk8s';
import { Construct } from 'constructs';


/**
 *
 *
 * @schema BigtableAppProfile
 */
export class BigtableAppProfile extends ApiObject {
  /**
   * Returns the apiVersion and kind for "BigtableAppProfile"
   */
  public static readonly GVK: GroupVersionKind = {
    apiVersion: 'bigtable.cnrm.cloud.google.com/v1beta1',
    kind: 'BigtableAppProfile',
  }

  /**
   * Renders a Kubernetes manifest for "BigtableAppProfile".
   *
   * This can be used to inline resource manifests inside other objects (e.g. as templates).
   *
   * @param props initialization props
   */
  public static manifest(props: BigtableAppProfileProps = {}): any {
    return {
      ...BigtableAppProfile.GVK,
      ...toJson_BigtableAppProfileProps(props),
    };
  }

  /**
   * Defines a "BigtableAppProfile" API object
   * @param scope the scope in which to define this object
   * @param id a scope-local name for the object
   * @param props initialization props
   */
  public constructor(scope: Construct, id: string, props: BigtableAppProfileProps = {}) {
    super(scope, id, {
      ...BigtableAppProfile.GVK,
      ...props,
    });
  }

  /**
   * Renders the object to Kubernetes JSON.
   */
  public toJson(): any {
    const resolved = super.toJson();

    return {
      ...BigtableAppProfile.GVK,
      ...toJson_BigtableAppProfileProps(resolved),
    };
  }
}

/**
 * @schema BigtableAppProfile
 */
export interface BigtableAppProfileProps {
  /**
   * @schema BigtableAppProfile#metadata
   */
  readonly metadata?: ApiObjectMetadata;

  /**
   * @schema BigtableAppProfile#spec
   */
  readonly spec?: BigtableAppProfileSpec;

}

/**
 * Converts an object of type 'BigtableAppProfileProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BigtableAppProfileProps(obj: BigtableAppProfileProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'metadata': obj.metadata,
    'spec': toJson_BigtableAppProfileSpec(obj.spec),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BigtableAppProfileSpec
 */
export interface BigtableAppProfileSpec {
  /**
   * Long form description of the use case for this app profile.
   *
   * @schema BigtableAppProfileSpec#description
   */
  readonly description?: string;

  /**
   * The instance to create the app profile within.
   *
   * @schema BigtableAppProfileSpec#instanceRef
   */
  readonly instanceRef?: BigtableAppProfileSpecInstanceRef;

  /**
   * The set of clusters to route to. The order is ignored; clusters will be tried in order of distance. If left empty, all clusters are eligible.
   *
   * @schema BigtableAppProfileSpec#multiClusterRoutingClusterIds
   */
  readonly multiClusterRoutingClusterIds?: string[];

  /**
   * If true, read/write requests are routed to the nearest cluster in the instance, and will fail over to the nearest cluster that is available
   * in the event of transient errors or delays. Clusters in a region are considered equidistant. Choosing this option sacrifices read-your-writes
   * consistency to improve availability.
   *
   * @schema BigtableAppProfileSpec#multiClusterRoutingUseAny
   */
  readonly multiClusterRoutingUseAny?: boolean;

  /**
   * Immutable. Optional. The appProfileId of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
   *
   * @schema BigtableAppProfileSpec#resourceID
   */
  readonly resourceId?: string;

  /**
   * Use a single-cluster routing policy.
   *
   * @schema BigtableAppProfileSpec#singleClusterRouting
   */
  readonly singleClusterRouting?: BigtableAppProfileSpecSingleClusterRouting;

}

/**
 * Converts an object of type 'BigtableAppProfileSpec' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BigtableAppProfileSpec(obj: BigtableAppProfileSpec | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'description': obj.description,
    'instanceRef': toJson_BigtableAppProfileSpecInstanceRef(obj.instanceRef),
    'multiClusterRoutingClusterIds': obj.multiClusterRoutingClusterIds?.map(y => y),
    'multiClusterRoutingUseAny': obj.multiClusterRoutingUseAny,
    'resourceID': obj.resourceId,
    'singleClusterRouting': toJson_BigtableAppProfileSpecSingleClusterRouting(obj.singleClusterRouting),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * The instance to create the app profile within.
 *
 * @schema BigtableAppProfileSpecInstanceRef
 */
export interface BigtableAppProfileSpecInstanceRef {
  /**
   * Allowed value: The `name` field of a `BigtableInstance` resource.
   *
   * @schema BigtableAppProfileSpecInstanceRef#external
   */
  readonly external?: string;

  /**
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   *
   * @schema BigtableAppProfileSpecInstanceRef#name
   */
  readonly name?: string;

  /**
   * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
   *
   * @schema BigtableAppProfileSpecInstanceRef#namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'BigtableAppProfileSpecInstanceRef' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BigtableAppProfileSpecInstanceRef(obj: BigtableAppProfileSpecInstanceRef | undefined): Record<string, any> | undefined {
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
 * Use a single-cluster routing policy.
 *
 * @schema BigtableAppProfileSpecSingleClusterRouting
 */
export interface BigtableAppProfileSpecSingleClusterRouting {
  /**
   * If true, CheckAndMutateRow and ReadModifyWriteRow requests are allowed by this app profile.
   * It is unsafe to send these requests to the same table/row/column in multiple clusters.
   *
   * @schema BigtableAppProfileSpecSingleClusterRouting#allowTransactionalWrites
   */
  readonly allowTransactionalWrites?: boolean;

  /**
   * The cluster to which read/write requests should be routed.
   *
   * @schema BigtableAppProfileSpecSingleClusterRouting#clusterId
   */
  readonly clusterId: string;

}

/**
 * Converts an object of type 'BigtableAppProfileSpecSingleClusterRouting' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BigtableAppProfileSpecSingleClusterRouting(obj: BigtableAppProfileSpecSingleClusterRouting | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'allowTransactionalWrites': obj.allowTransactionalWrites,
    'clusterId': obj.clusterId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */


/**
 *
 *
 * @schema BigtableGCPolicy
 */
export class BigtableGcPolicy extends ApiObject {
  /**
   * Returns the apiVersion and kind for "BigtableGCPolicy"
   */
  public static readonly GVK: GroupVersionKind = {
    apiVersion: 'bigtable.cnrm.cloud.google.com/v1beta1',
    kind: 'BigtableGCPolicy',
  }

  /**
   * Renders a Kubernetes manifest for "BigtableGCPolicy".
   *
   * This can be used to inline resource manifests inside other objects (e.g. as templates).
   *
   * @param props initialization props
   */
  public static manifest(props: BigtableGcPolicyProps): any {
    return {
      ...BigtableGcPolicy.GVK,
      ...toJson_BigtableGcPolicyProps(props),
    };
  }

  /**
   * Defines a "BigtableGCPolicy" API object
   * @param scope the scope in which to define this object
   * @param id a scope-local name for the object
   * @param props initialization props
   */
  public constructor(scope: Construct, id: string, props: BigtableGcPolicyProps) {
    super(scope, id, {
      ...BigtableGcPolicy.GVK,
      ...props,
    });
  }

  /**
   * Renders the object to Kubernetes JSON.
   */
  public toJson(): any {
    const resolved = super.toJson();

    return {
      ...BigtableGcPolicy.GVK,
      ...toJson_BigtableGcPolicyProps(resolved),
    };
  }
}

/**
 * @schema BigtableGCPolicy
 */
export interface BigtableGcPolicyProps {
  /**
   * @schema BigtableGCPolicy#metadata
   */
  readonly metadata?: ApiObjectMetadata;

  /**
   * @schema BigtableGCPolicy#spec
   */
  readonly spec: BigtableGcPolicySpec;

}

/**
 * Converts an object of type 'BigtableGcPolicyProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BigtableGcPolicyProps(obj: BigtableGcPolicyProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'metadata': obj.metadata,
    'spec': toJson_BigtableGcPolicySpec(obj.spec),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BigtableGcPolicySpec
 */
export interface BigtableGcPolicySpec {
  /**
   * Immutable. The name of the column family.
   *
   * @schema BigtableGcPolicySpec#columnFamily
   */
  readonly columnFamily: string;

  /**
   * The deletion policy for the GC policy. Setting ABANDON allows the resource
   * to be abandoned rather than deleted. This is useful for GC policy as it cannot be deleted
   * in a replicated instance. Possible values are: "ABANDON".
   *
   * @schema BigtableGcPolicySpec#deletionPolicy
   */
  readonly deletionPolicy?: string;

  /**
   * Serialized JSON string for garbage collection policy. Conflicts with "mode", "max_age" and "max_version".
   *
   * @schema BigtableGcPolicySpec#gcRules
   */
  readonly gcRules?: string;

  /**
   * The name of the Bigtable instance.
   *
   * @schema BigtableGcPolicySpec#instanceRef
   */
  readonly instanceRef: BigtableGcPolicySpecInstanceRef;

  /**
   * Immutable. NOTE: 'gc_rules' is more flexible, and should be preferred over this field for new resources. This field may be deprecated in the future. GC policy that applies to all cells older than the given age.
   *
   * @schema BigtableGcPolicySpec#maxAge
   */
  readonly maxAge?: BigtableGcPolicySpecMaxAge[];

  /**
   * Immutable. NOTE: 'gc_rules' is more flexible, and should be preferred over this field for new resources. This field may be deprecated in the future. GC policy that applies to all versions of a cell except for the most recent.
   *
   * @schema BigtableGcPolicySpec#maxVersion
   */
  readonly maxVersion?: BigtableGcPolicySpecMaxVersion[];

  /**
   * Immutable. NOTE: 'gc_rules' is more flexible, and should be preferred over this field for new resources. This field may be deprecated in the future. If multiple policies are set, you should choose between UNION OR INTERSECTION.
   *
   * @schema BigtableGcPolicySpec#mode
   */
  readonly mode?: string;

  /**
   * The name of the table.
   *
   * @schema BigtableGcPolicySpec#tableRef
   */
  readonly tableRef: BigtableGcPolicySpecTableRef;

}

/**
 * Converts an object of type 'BigtableGcPolicySpec' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BigtableGcPolicySpec(obj: BigtableGcPolicySpec | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'columnFamily': obj.columnFamily,
    'deletionPolicy': obj.deletionPolicy,
    'gcRules': obj.gcRules,
    'instanceRef': toJson_BigtableGcPolicySpecInstanceRef(obj.instanceRef),
    'maxAge': obj.maxAge?.map(y => toJson_BigtableGcPolicySpecMaxAge(y)),
    'maxVersion': obj.maxVersion?.map(y => toJson_BigtableGcPolicySpecMaxVersion(y)),
    'mode': obj.mode,
    'tableRef': toJson_BigtableGcPolicySpecTableRef(obj.tableRef),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * The name of the Bigtable instance.
 *
 * @schema BigtableGcPolicySpecInstanceRef
 */
export interface BigtableGcPolicySpecInstanceRef {
  /**
   * Allowed value: The `name` field of a `BigtableInstance` resource.
   *
   * @schema BigtableGcPolicySpecInstanceRef#external
   */
  readonly external?: string;

  /**
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   *
   * @schema BigtableGcPolicySpecInstanceRef#name
   */
  readonly name?: string;

  /**
   * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
   *
   * @schema BigtableGcPolicySpecInstanceRef#namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'BigtableGcPolicySpecInstanceRef' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BigtableGcPolicySpecInstanceRef(obj: BigtableGcPolicySpecInstanceRef | undefined): Record<string, any> | undefined {
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
 * @schema BigtableGcPolicySpecMaxAge
 */
export interface BigtableGcPolicySpecMaxAge {
  /**
   * DEPRECATED. Deprecated in favor of duration. Immutable. Number of days before applying GC policy.
   *
   * @schema BigtableGcPolicySpecMaxAge#days
   */
  readonly days?: number;

  /**
   * Immutable. Duration before applying GC policy.
   *
   * @schema BigtableGcPolicySpecMaxAge#duration
   */
  readonly duration?: string;

}

/**
 * Converts an object of type 'BigtableGcPolicySpecMaxAge' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BigtableGcPolicySpecMaxAge(obj: BigtableGcPolicySpecMaxAge | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'days': obj.days,
    'duration': obj.duration,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BigtableGcPolicySpecMaxVersion
 */
export interface BigtableGcPolicySpecMaxVersion {
  /**
   * Immutable. Number of version before applying the GC policy.
   *
   * @schema BigtableGcPolicySpecMaxVersion#number
   */
  readonly number: number;

}

/**
 * Converts an object of type 'BigtableGcPolicySpecMaxVersion' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BigtableGcPolicySpecMaxVersion(obj: BigtableGcPolicySpecMaxVersion | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'number': obj.number,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * The name of the table.
 *
 * @schema BigtableGcPolicySpecTableRef
 */
export interface BigtableGcPolicySpecTableRef {
  /**
   * Allowed value: The `name` field of a `BigtableTable` resource.
   *
   * @schema BigtableGcPolicySpecTableRef#external
   */
  readonly external?: string;

  /**
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   *
   * @schema BigtableGcPolicySpecTableRef#name
   */
  readonly name?: string;

  /**
   * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
   *
   * @schema BigtableGcPolicySpecTableRef#namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'BigtableGcPolicySpecTableRef' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BigtableGcPolicySpecTableRef(obj: BigtableGcPolicySpecTableRef | undefined): Record<string, any> | undefined {
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
 * @schema BigtableInstance
 */
export class BigtableInstance extends ApiObject {
  /**
   * Returns the apiVersion and kind for "BigtableInstance"
   */
  public static readonly GVK: GroupVersionKind = {
    apiVersion: 'bigtable.cnrm.cloud.google.com/v1beta1',
    kind: 'BigtableInstance',
  }

  /**
   * Renders a Kubernetes manifest for "BigtableInstance".
   *
   * This can be used to inline resource manifests inside other objects (e.g. as templates).
   *
   * @param props initialization props
   */
  public static manifest(props: BigtableInstanceProps = {}): any {
    return {
      ...BigtableInstance.GVK,
      ...toJson_BigtableInstanceProps(props),
    };
  }

  /**
   * Defines a "BigtableInstance" API object
   * @param scope the scope in which to define this object
   * @param id a scope-local name for the object
   * @param props initialization props
   */
  public constructor(scope: Construct, id: string, props: BigtableInstanceProps = {}) {
    super(scope, id, {
      ...BigtableInstance.GVK,
      ...props,
    });
  }

  /**
   * Renders the object to Kubernetes JSON.
   */
  public toJson(): any {
    const resolved = super.toJson();

    return {
      ...BigtableInstance.GVK,
      ...toJson_BigtableInstanceProps(resolved),
    };
  }
}

/**
 * @schema BigtableInstance
 */
export interface BigtableInstanceProps {
  /**
   * @schema BigtableInstance#metadata
   */
  readonly metadata?: ApiObjectMetadata;

  /**
   * @schema BigtableInstance#spec
   */
  readonly spec?: BigtableInstanceSpec;

}

/**
 * Converts an object of type 'BigtableInstanceProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BigtableInstanceProps(obj: BigtableInstanceProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'metadata': obj.metadata,
    'spec': toJson_BigtableInstanceSpec(obj.spec),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BigtableInstanceSpec
 */
export interface BigtableInstanceSpec {
  /**
   * A block of cluster configuration options. This can be specified at least once.
   *
   * @schema BigtableInstanceSpec#cluster
   */
  readonly cluster?: BigtableInstanceSpecCluster[];

  /**
   * DEPRECATED. This field no longer serves any function and is intended to be dropped in a later version of the resource.
   *
   * @schema BigtableInstanceSpec#deletionProtection
   */
  readonly deletionProtection?: boolean;

  /**
   * The human-readable display name of the Bigtable instance. Defaults to the instance name.
   *
   * @default the instance name.
   * @schema BigtableInstanceSpec#displayName
   */
  readonly displayName?: string;

  /**
   * DEPRECATED. It is recommended to leave this field unspecified since the distinction between "DEVELOPMENT" and "PRODUCTION" instances is going away, and all instances will become "PRODUCTION" instances. This means that new and existing "DEVELOPMENT" instances will be converted to "PRODUCTION" instances. It is recommended for users to use "PRODUCTION" instances in any case, since a 1-node "PRODUCTION" instance is functionally identical to a "DEVELOPMENT" instance, but without the accompanying restrictions. The instance type to create. One of "DEVELOPMENT" or "PRODUCTION". Defaults to "PRODUCTION".
   *
   * @default PRODUCTION".
   * @schema BigtableInstanceSpec#instanceType
   */
  readonly instanceType?: string;

  /**
   * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
   *
   * @schema BigtableInstanceSpec#resourceID
   */
  readonly resourceId?: string;

}

/**
 * Converts an object of type 'BigtableInstanceSpec' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BigtableInstanceSpec(obj: BigtableInstanceSpec | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'cluster': obj.cluster?.map(y => toJson_BigtableInstanceSpecCluster(y)),
    'deletionProtection': obj.deletionProtection,
    'displayName': obj.displayName,
    'instanceType': obj.instanceType,
    'resourceID': obj.resourceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BigtableInstanceSpecCluster
 */
export interface BigtableInstanceSpecCluster {
  /**
   * A list of Autoscaling configurations. Only one element is used and allowed.
   *
   * @schema BigtableInstanceSpecCluster#autoscalingConfig
   */
  readonly autoscalingConfig?: BigtableInstanceSpecClusterAutoscalingConfig;

  /**
   * The ID of the Cloud Bigtable cluster. Must be 6-30 characters and must only contain hyphens, lowercase letters and numbers.
   *
   * @schema BigtableInstanceSpecCluster#clusterId
   */
  readonly clusterId: string;

  /**
   * Describes the Cloud KMS encryption key that will be used to protect the destination Bigtable
   * cluster. The requirements for this key are: 1) The Cloud Bigtable service account associated with the project that contains
   * this cluster must be granted the cloudkms.cryptoKeyEncrypterDecrypter role on the CMEK key.
   * 2) Only regional keys can be used and the region of the CMEK key must match the region of the cluster.
   * 3) All clusters within an instance must use the same CMEK key access to this encryption key.
   *
   * @schema BigtableInstanceSpecCluster#kmsKeyRef
   */
  readonly kmsKeyRef?: BigtableInstanceSpecClusterKmsKeyRef;

  /**
   * The number of nodes in the cluster. If no value is set, Cloud Bigtable automatically allocates nodes based on your data footprint and optimized for 50% storage utilization.
   *
   * @schema BigtableInstanceSpecCluster#numNodes
   */
  readonly numNodes?: number;

  /**
   * The storage type to use. One of "SSD" or "HDD". Defaults to "SSD".
   *
   * @default SSD".
   * @schema BigtableInstanceSpecCluster#storageType
   */
  readonly storageType?: string;

  /**
   * The zone to create the Cloud Bigtable cluster in. Each cluster must have a different zone in the same region. Zones that support Bigtable instances are noted on the Cloud Bigtable locations page.
   *
   * @schema BigtableInstanceSpecCluster#zone
   */
  readonly zone: string;

}

/**
 * Converts an object of type 'BigtableInstanceSpecCluster' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BigtableInstanceSpecCluster(obj: BigtableInstanceSpecCluster | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'autoscalingConfig': toJson_BigtableInstanceSpecClusterAutoscalingConfig(obj.autoscalingConfig),
    'clusterId': obj.clusterId,
    'kmsKeyRef': toJson_BigtableInstanceSpecClusterKmsKeyRef(obj.kmsKeyRef),
    'numNodes': obj.numNodes,
    'storageType': obj.storageType,
    'zone': obj.zone,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * A list of Autoscaling configurations. Only one element is used and allowed.
 *
 * @schema BigtableInstanceSpecClusterAutoscalingConfig
 */
export interface BigtableInstanceSpecClusterAutoscalingConfig {
  /**
   * The target CPU utilization for autoscaling. Value must be between 10 and 80.
   *
   * @schema BigtableInstanceSpecClusterAutoscalingConfig#cpuTarget
   */
  readonly cpuTarget: number;

  /**
   * The maximum number of nodes for autoscaling.
   *
   * @schema BigtableInstanceSpecClusterAutoscalingConfig#maxNodes
   */
  readonly maxNodes: number;

  /**
   * The minimum number of nodes for autoscaling.
   *
   * @schema BigtableInstanceSpecClusterAutoscalingConfig#minNodes
   */
  readonly minNodes: number;

  /**
   * The target storage utilization for autoscaling, in GB, for each node in a cluster. This number is limited between 2560 (2.5TiB) and 5120 (5TiB) for a SSD cluster and between 8192 (8TiB) and 16384 (16 TiB) for an HDD cluster. If not set, whatever is already set for the cluster will not change, or if the cluster is just being created, it will use the default value of 2560 for SSD clusters and 8192 for HDD clusters.
   *
   * @schema BigtableInstanceSpecClusterAutoscalingConfig#storageTarget
   */
  readonly storageTarget?: number;

}

/**
 * Converts an object of type 'BigtableInstanceSpecClusterAutoscalingConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BigtableInstanceSpecClusterAutoscalingConfig(obj: BigtableInstanceSpecClusterAutoscalingConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'cpuTarget': obj.cpuTarget,
    'maxNodes': obj.maxNodes,
    'minNodes': obj.minNodes,
    'storageTarget': obj.storageTarget,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Describes the Cloud KMS encryption key that will be used to protect the destination Bigtable
 * cluster. The requirements for this key are: 1) The Cloud Bigtable service account associated with the project that contains
 * this cluster must be granted the cloudkms.cryptoKeyEncrypterDecrypter role on the CMEK key.
 * 2) Only regional keys can be used and the region of the CMEK key must match the region of the cluster.
 * 3) All clusters within an instance must use the same CMEK key access to this encryption key.
 *
 * @schema BigtableInstanceSpecClusterKmsKeyRef
 */
export interface BigtableInstanceSpecClusterKmsKeyRef {
  /**
   * Allowed value: The `selfLink` field of a `KMSCryptoKey` resource.
   *
   * @schema BigtableInstanceSpecClusterKmsKeyRef#external
   */
  readonly external?: string;

  /**
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   *
   * @schema BigtableInstanceSpecClusterKmsKeyRef#name
   */
  readonly name?: string;

  /**
   * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
   *
   * @schema BigtableInstanceSpecClusterKmsKeyRef#namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'BigtableInstanceSpecClusterKmsKeyRef' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BigtableInstanceSpecClusterKmsKeyRef(obj: BigtableInstanceSpecClusterKmsKeyRef | undefined): Record<string, any> | undefined {
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
 * @schema BigtableTable
 */
export class BigtableTable extends ApiObject {
  /**
   * Returns the apiVersion and kind for "BigtableTable"
   */
  public static readonly GVK: GroupVersionKind = {
    apiVersion: 'bigtable.cnrm.cloud.google.com/v1beta1',
    kind: 'BigtableTable',
  }

  /**
   * Renders a Kubernetes manifest for "BigtableTable".
   *
   * This can be used to inline resource manifests inside other objects (e.g. as templates).
   *
   * @param props initialization props
   */
  public static manifest(props: BigtableTableProps): any {
    return {
      ...BigtableTable.GVK,
      ...toJson_BigtableTableProps(props),
    };
  }

  /**
   * Defines a "BigtableTable" API object
   * @param scope the scope in which to define this object
   * @param id a scope-local name for the object
   * @param props initialization props
   */
  public constructor(scope: Construct, id: string, props: BigtableTableProps) {
    super(scope, id, {
      ...BigtableTable.GVK,
      ...props,
    });
  }

  /**
   * Renders the object to Kubernetes JSON.
   */
  public toJson(): any {
    const resolved = super.toJson();

    return {
      ...BigtableTable.GVK,
      ...toJson_BigtableTableProps(resolved),
    };
  }
}

/**
 * @schema BigtableTable
 */
export interface BigtableTableProps {
  /**
   * @schema BigtableTable#metadata
   */
  readonly metadata?: ApiObjectMetadata;

  /**
   * @schema BigtableTable#spec
   */
  readonly spec: BigtableTableSpec;

}

/**
 * Converts an object of type 'BigtableTableProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BigtableTableProps(obj: BigtableTableProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'metadata': obj.metadata,
    'spec': toJson_BigtableTableSpec(obj.spec),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BigtableTableSpec
 */
export interface BigtableTableSpec {
  /**
   * Duration to retain change stream data for the table. Set to 0 to disable. Must be between 1 and 7 days.
   *
   * @schema BigtableTableSpec#changeStreamRetention
   */
  readonly changeStreamRetention?: string;

  /**
   * A group of columns within a table which share a common configuration. This can be specified multiple times.
   *
   * @schema BigtableTableSpec#columnFamily
   */
  readonly columnFamily?: BigtableTableSpecColumnFamily[];

  /**
   * A field to make the table protected against data loss i.e. when set to PROTECTED, deleting the table, the column families in the table, and the instance containing the table would be prohibited. If not provided, currently deletion protection will be set to UNPROTECTED as it is the API default value.
   *
   * @schema BigtableTableSpec#deletionProtection
   */
  readonly deletionProtection?: string;

  /**
   * The name of the Bigtable instance.
   *
   * @schema BigtableTableSpec#instanceRef
   */
  readonly instanceRef: BigtableTableSpecInstanceRef;

  /**
   * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
   *
   * @schema BigtableTableSpec#resourceID
   */
  readonly resourceId?: string;

  /**
   * @schema BigtableTableSpec#splitKeys
   */
  readonly splitKeys?: string[];

}

/**
 * Converts an object of type 'BigtableTableSpec' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BigtableTableSpec(obj: BigtableTableSpec | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'changeStreamRetention': obj.changeStreamRetention,
    'columnFamily': obj.columnFamily?.map(y => toJson_BigtableTableSpecColumnFamily(y)),
    'deletionProtection': obj.deletionProtection,
    'instanceRef': toJson_BigtableTableSpecInstanceRef(obj.instanceRef),
    'resourceID': obj.resourceId,
    'splitKeys': obj.splitKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema BigtableTableSpecColumnFamily
 */
export interface BigtableTableSpecColumnFamily {
  /**
   * The name of the column family.
   *
   * @schema BigtableTableSpecColumnFamily#family
   */
  readonly family: string;

}

/**
 * Converts an object of type 'BigtableTableSpecColumnFamily' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BigtableTableSpecColumnFamily(obj: BigtableTableSpecColumnFamily | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'family': obj.family,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * The name of the Bigtable instance.
 *
 * @schema BigtableTableSpecInstanceRef
 */
export interface BigtableTableSpecInstanceRef {
  /**
   * Allowed value: The `name` field of a `BigtableInstance` resource.
   *
   * @schema BigtableTableSpecInstanceRef#external
   */
  readonly external?: string;

  /**
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   *
   * @schema BigtableTableSpecInstanceRef#name
   */
  readonly name?: string;

  /**
   * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
   *
   * @schema BigtableTableSpecInstanceRef#namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'BigtableTableSpecInstanceRef' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_BigtableTableSpecInstanceRef(obj: BigtableTableSpecInstanceRef | undefined): Record<string, any> | undefined {
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

