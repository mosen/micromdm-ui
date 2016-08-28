# Application Packages #

Currently packages are only located on the local filesystem of the MDM, but they could be sourced from a number of
different places.

- munki import/sync for on-demand one off installations of munki packages.
- s3 or other object storage
- local filesystem
- other http service

## Manifests ##

The application could reasonably generate manifests for any given signed flat pkg if it had:

- Icons (munki)
- MD5 hash (munki)
- Chunk MD5 hashes (must generate ourselves)
- Package Size (munki)
- BundleId (munki unless a distribution pkg)
- Title (munki)

## Discovery of Package Repositories ##

config via etcd / consul / conf file etc.


