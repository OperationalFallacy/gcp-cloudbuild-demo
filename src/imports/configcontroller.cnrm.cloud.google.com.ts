// generated by cdk8s
import { ApiObject, ApiObjectMetadata, GroupVersionKind } from 'cdk8s';
import { Construct } from 'constructs';


/**
 *
 *
 * @schema ConfigControllerInstance
 */
export class ConfigControllerInstance extends ApiObject {
  /**
   * Returns the apiVersion and kind for "ConfigControllerInstance"
   */
  public static readonly GVK: GroupVersionKind = {
    apiVersion: 'configcontroller.cnrm.cloud.google.com/v1beta1',
    kind: 'ConfigControllerInstance',
  }

  /**
   * Renders a Kubernetes manifest for "ConfigControllerInstance".
   *
   * This can be used to inline resource manifests inside other objects (e.g. as templates).
   *
   * @param props initialization props
   */
  public static manifest(props: ConfigControllerInstanceProps): any {
    return {
      ...ConfigControllerInstance.GVK,
      ...toJson_ConfigControllerInstanceProps(props),
    };
  }

  /**
   * Defines a "ConfigControllerInstance" API object
   * @param scope the scope in which to define this object
   * @param id a scope-local name for the object
   * @param props initialization props
   */
  public constructor(scope: Construct, id: string, props: ConfigControllerInstanceProps) {
    super(scope, id, {
      ...ConfigControllerInstance.GVK,
      ...props,
    });
  }

  /**
   * Renders the object to Kubernetes JSON.
   */
  public toJson(): any {
    const resolved = super.toJson();

    return {
      ...ConfigControllerInstance.GVK,
      ...toJson_ConfigControllerInstanceProps(resolved),
    };
  }
}

/**
 * @schema ConfigControllerInstance
 */
export interface ConfigControllerInstanceProps {
  /**
   * @schema ConfigControllerInstance#metadata
   */
  readonly metadata?: ApiObjectMetadata;

  /**
   * @schema ConfigControllerInstance#spec
   */
  readonly spec: ConfigControllerInstanceSpec;

}

/**
 * Converts an object of type 'ConfigControllerInstanceProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConfigControllerInstanceProps(obj: ConfigControllerInstanceProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'metadata': obj.metadata,
    'spec': toJson_ConfigControllerInstanceSpec(obj.spec),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ConfigControllerInstanceSpec
 */
export interface ConfigControllerInstanceSpec {
  /**
   * Immutable. The location for the resource
   *
   * @schema ConfigControllerInstanceSpec#location
   */
  readonly location: string;

  /**
   * Immutable. Configuration of the cluster management
   *
   * @schema ConfigControllerInstanceSpec#managementConfig
   */
  readonly managementConfig: ConfigControllerInstanceSpecManagementConfig;

  /**
   * Immutable. The Project that this resource belongs to.
   *
   * @schema ConfigControllerInstanceSpec#projectRef
   */
  readonly projectRef: ConfigControllerInstanceSpecProjectRef;

  /**
   * Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
   *
   * @schema ConfigControllerInstanceSpec#resourceID
   */
  readonly resourceId?: string;

  /**
   * Immutable. Only allow access to the master's private endpoint IP.
   *
   * @schema ConfigControllerInstanceSpec#usePrivateEndpoint
   */
  readonly usePrivateEndpoint?: boolean;

}

/**
 * Converts an object of type 'ConfigControllerInstanceSpec' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConfigControllerInstanceSpec(obj: ConfigControllerInstanceSpec | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'location': obj.location,
    'managementConfig': toJson_ConfigControllerInstanceSpecManagementConfig(obj.managementConfig),
    'projectRef': toJson_ConfigControllerInstanceSpecProjectRef(obj.projectRef),
    'resourceID': obj.resourceId,
    'usePrivateEndpoint': obj.usePrivateEndpoint,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Immutable. Configuration of the cluster management
 *
 * @schema ConfigControllerInstanceSpecManagementConfig
 */
export interface ConfigControllerInstanceSpecManagementConfig {
  /**
   * Immutable. Configuration of the full (Autopilot) cluster management
   *
   * @schema ConfigControllerInstanceSpecManagementConfig#fullManagementConfig
   */
  readonly fullManagementConfig?: ConfigControllerInstanceSpecManagementConfigFullManagementConfig;

  /**
   * Immutable. Configuration of the standard (GKE) cluster management
   *
   * @schema ConfigControllerInstanceSpecManagementConfig#standardManagementConfig
   */
  readonly standardManagementConfig?: ConfigControllerInstanceSpecManagementConfigStandardManagementConfig;

}

/**
 * Converts an object of type 'ConfigControllerInstanceSpecManagementConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConfigControllerInstanceSpecManagementConfig(obj: ConfigControllerInstanceSpecManagementConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'fullManagementConfig': toJson_ConfigControllerInstanceSpecManagementConfigFullManagementConfig(obj.fullManagementConfig),
    'standardManagementConfig': toJson_ConfigControllerInstanceSpecManagementConfigStandardManagementConfig(obj.standardManagementConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Immutable. The Project that this resource belongs to.
 *
 * @schema ConfigControllerInstanceSpecProjectRef
 */
export interface ConfigControllerInstanceSpecProjectRef {
  /**
   * The project for the resource
   *
   * Allowed value: The Google Cloud resource name of a `Project` resource (format: `projects/{{name}}`).
   *
   * @schema ConfigControllerInstanceSpecProjectRef#external
   */
  readonly external?: string;

  /**
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   *
   * @schema ConfigControllerInstanceSpecProjectRef#name
   */
  readonly name?: string;

  /**
   * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
   *
   * @schema ConfigControllerInstanceSpecProjectRef#namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'ConfigControllerInstanceSpecProjectRef' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConfigControllerInstanceSpecProjectRef(obj: ConfigControllerInstanceSpecProjectRef | undefined): Record<string, any> | undefined {
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
 * Immutable. Configuration of the full (Autopilot) cluster management
 *
 * @schema ConfigControllerInstanceSpecManagementConfigFullManagementConfig
 */
export interface ConfigControllerInstanceSpecManagementConfigFullManagementConfig {
  /**
   * Immutable. The IP address range for the cluster pod IPs. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. /14) to have a range chosen with a specific netmask. Set to a CIDR notation (e.g. 10.96.0.0/14) from the RFC-1918 private networks (e.g. 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) to pick a specific range to use.
   *
   * @schema ConfigControllerInstanceSpecManagementConfigFullManagementConfig#clusterCidrBlock
   */
  readonly clusterCidrBlock?: string;

  /**
   * Immutable. The name of the existing secondary range in the cluster's subnetwork to use for pod IP addresses. Alternatively, cluster_cidr_block can be used to automatically create a GKE-managed one.
   *
   * @schema ConfigControllerInstanceSpecManagementConfigFullManagementConfig#clusterNamedRange
   */
  readonly clusterNamedRange?: string;

  /**
   * Immutable. Master Authorized Network. Allows access to the k8s master from this block.
   *
   * @schema ConfigControllerInstanceSpecManagementConfigFullManagementConfig#manBlock
   */
  readonly manBlock?: string;

  /**
   * Immutable. The /28 network that the masters will use.
   *
   * @schema ConfigControllerInstanceSpecManagementConfigFullManagementConfig#masterIPv4CidrBlock
   */
  readonly masterIPv4CidrBlock?: string;

  /**
   * Immutable.
   *
   * @schema ConfigControllerInstanceSpecManagementConfigFullManagementConfig#networkRef
   */
  readonly networkRef?: ConfigControllerInstanceSpecManagementConfigFullManagementConfigNetworkRef;

  /**
   * Immutable. The IP address range for the cluster service IPs. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. /14) to have a range chosen with a specific netmask. Set to a CIDR notation (e.g. 10.96.0.0/14) from the RFC-1918 private networks (e.g. 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) to pick a specific range to use.
   *
   * @schema ConfigControllerInstanceSpecManagementConfigFullManagementConfig#servicesCidrBlock
   */
  readonly servicesCidrBlock?: string;

  /**
   * Immutable. The name of the existing secondary range in the cluster's subnetwork to use for service ClusterIPs. Alternatively, services_cidr_block can be used to automatically create a GKE-managed one.
   *
   * @schema ConfigControllerInstanceSpecManagementConfigFullManagementConfig#servicesNamedRange
   */
  readonly servicesNamedRange?: string;

}

/**
 * Converts an object of type 'ConfigControllerInstanceSpecManagementConfigFullManagementConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConfigControllerInstanceSpecManagementConfigFullManagementConfig(obj: ConfigControllerInstanceSpecManagementConfigFullManagementConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clusterCidrBlock': obj.clusterCidrBlock,
    'clusterNamedRange': obj.clusterNamedRange,
    'manBlock': obj.manBlock,
    'masterIPv4CidrBlock': obj.masterIPv4CidrBlock,
    'networkRef': toJson_ConfigControllerInstanceSpecManagementConfigFullManagementConfigNetworkRef(obj.networkRef),
    'servicesCidrBlock': obj.servicesCidrBlock,
    'servicesNamedRange': obj.servicesNamedRange,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Immutable. Configuration of the standard (GKE) cluster management
 *
 * @schema ConfigControllerInstanceSpecManagementConfigStandardManagementConfig
 */
export interface ConfigControllerInstanceSpecManagementConfigStandardManagementConfig {
  /**
   * Immutable. The IP address range for the cluster pod IPs. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. /14) to have a range chosen with a specific netmask. Set to a CIDR notation (e.g. 10.96.0.0/14) from the RFC-1918 private networks (e.g. 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) to pick a specific range to use.
   *
   * @schema ConfigControllerInstanceSpecManagementConfigStandardManagementConfig#clusterCidrBlock
   */
  readonly clusterCidrBlock?: string;

  /**
   * Immutable. The name of the existing secondary range in the cluster's subnetwork to use for pod IP addresses. Alternatively, cluster_cidr_block can be used to automatically create a GKE-managed one.
   *
   * @schema ConfigControllerInstanceSpecManagementConfigStandardManagementConfig#clusterNamedRange
   */
  readonly clusterNamedRange?: string;

  /**
   * Immutable. Master Authorized Network. Allows access to the k8s master from this block.
   *
   * @schema ConfigControllerInstanceSpecManagementConfigStandardManagementConfig#manBlock
   */
  readonly manBlock?: string;

  /**
   * Immutable. The /28 network that the masters will use.
   *
   * @schema ConfigControllerInstanceSpecManagementConfigStandardManagementConfig#masterIPv4CidrBlock
   */
  readonly masterIPv4CidrBlock: string;

  /**
   * Immutable.
   *
   * @schema ConfigControllerInstanceSpecManagementConfigStandardManagementConfig#networkRef
   */
  readonly networkRef?: ConfigControllerInstanceSpecManagementConfigStandardManagementConfigNetworkRef;

  /**
   * Immutable. The IP address range for the cluster service IPs. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. /14) to have a range chosen with a specific netmask. Set to a CIDR notation (e.g. 10.96.0.0/14) from the RFC-1918 private networks (e.g. 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) to pick a specific range to use.
   *
   * @schema ConfigControllerInstanceSpecManagementConfigStandardManagementConfig#servicesCidrBlock
   */
  readonly servicesCidrBlock?: string;

  /**
   * Immutable. The name of the existing secondary range in the cluster's subnetwork to use for service ClusterIPs. Alternatively, services_cidr_block can be used to automatically create a GKE-managed one.
   *
   * @schema ConfigControllerInstanceSpecManagementConfigStandardManagementConfig#servicesNamedRange
   */
  readonly servicesNamedRange?: string;

}

/**
 * Converts an object of type 'ConfigControllerInstanceSpecManagementConfigStandardManagementConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConfigControllerInstanceSpecManagementConfigStandardManagementConfig(obj: ConfigControllerInstanceSpecManagementConfigStandardManagementConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clusterCidrBlock': obj.clusterCidrBlock,
    'clusterNamedRange': obj.clusterNamedRange,
    'manBlock': obj.manBlock,
    'masterIPv4CidrBlock': obj.masterIPv4CidrBlock,
    'networkRef': toJson_ConfigControllerInstanceSpecManagementConfigStandardManagementConfigNetworkRef(obj.networkRef),
    'servicesCidrBlock': obj.servicesCidrBlock,
    'servicesNamedRange': obj.servicesNamedRange,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Immutable.
 *
 * @schema ConfigControllerInstanceSpecManagementConfigFullManagementConfigNetworkRef
 */
export interface ConfigControllerInstanceSpecManagementConfigFullManagementConfigNetworkRef {
  /**
   * Existing VPC Network to put the GKE cluster and nodes in.
   *
   * Allowed value: The Google Cloud resource name of a `ComputeNetwork` resource (format: `projects/{{project}}/global/networks/{{name}}`).
   *
   * @schema ConfigControllerInstanceSpecManagementConfigFullManagementConfigNetworkRef#external
   */
  readonly external?: string;

  /**
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   *
   * @schema ConfigControllerInstanceSpecManagementConfigFullManagementConfigNetworkRef#name
   */
  readonly name?: string;

  /**
   * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
   *
   * @schema ConfigControllerInstanceSpecManagementConfigFullManagementConfigNetworkRef#namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'ConfigControllerInstanceSpecManagementConfigFullManagementConfigNetworkRef' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConfigControllerInstanceSpecManagementConfigFullManagementConfigNetworkRef(obj: ConfigControllerInstanceSpecManagementConfigFullManagementConfigNetworkRef | undefined): Record<string, any> | undefined {
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
 * Immutable.
 *
 * @schema ConfigControllerInstanceSpecManagementConfigStandardManagementConfigNetworkRef
 */
export interface ConfigControllerInstanceSpecManagementConfigStandardManagementConfigNetworkRef {
  /**
   * Existing VPC Network to put the GKE cluster and nodes in.
   *
   * Allowed value: The Google Cloud resource name of a `ComputeNetwork` resource (format: `projects/{{project}}/global/networks/{{name}}`).
   *
   * @schema ConfigControllerInstanceSpecManagementConfigStandardManagementConfigNetworkRef#external
   */
  readonly external?: string;

  /**
   * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
   *
   * @schema ConfigControllerInstanceSpecManagementConfigStandardManagementConfigNetworkRef#name
   */
  readonly name?: string;

  /**
   * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
   *
   * @schema ConfigControllerInstanceSpecManagementConfigStandardManagementConfigNetworkRef#namespace
   */
  readonly namespace?: string;

}

/**
 * Converts an object of type 'ConfigControllerInstanceSpecManagementConfigStandardManagementConfigNetworkRef' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ConfigControllerInstanceSpecManagementConfigStandardManagementConfigNetworkRef(obj: ConfigControllerInstanceSpecManagementConfigStandardManagementConfigNetworkRef | undefined): Record<string, any> | undefined {
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

